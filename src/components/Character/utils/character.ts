import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setCareerTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

// ── MANUAL ADJUSTMENTS FOR T-SHIRT LOGO ──
export const SHIRT_LOGO_CONFIG = {
  // 1. Size of the 3D plane holding the logo (width, height)
  // Increased from 0.35x0.30 to make it more visibly larger
  planeWidth: 0.55,
  planeHeight: 0.45,

  // 2. Position of the logo on the character's chest
  positionX: -0.75, // Move left/right (- is left side of screen)
  positionY: 10.6,  // Move up/down
  positionZ: 0.7,   // Move forward/backward (to prevent clipping into chest)

  // 3. Size of the logo image drawn onto the canvas texture
  canvasLogoSize: 256, // Max size is 256
};

const setCharacter = (
  _renderer: THREE.WebGLRenderer,
  _scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        let blobUrl: string;

        // The Web Crypto API (`crypto.subtle`) is ONLY available on HTTPS or "localhost".
        // When checking on a mobile phone over a local LAN IP (like 192.168.x.x via HTTP), 
        // the browser disables the Crypto API, which causes the loader to crash at 55%.
        try {
          if (!window.crypto || !window.crypto.subtle) {
            throw new Error("Web Crypto API unavailable on insecure HTTP connection.");
          }
          const encryptedBlob = await decryptFile(
            "/models/character.enc?v=2",
            "MyCharacter12"
          );
          blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
        } catch (err) {
          console.warn("Decryption skipped/failed, falling back to original GLB:", err);
          blobUrl = "/models/character.glb"; // Fallback URL
        }

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;

            // ── CANVASES FOR LOGO ──
            const badgeCanvas = document.createElement("canvas");
            badgeCanvas.width = 256;
            badgeCanvas.height = 256;
            const badgeCtx = badgeCanvas.getContext("2d")!;
            const badgeTexture = new THREE.CanvasTexture(badgeCanvas);
            badgeTexture.colorSpace = THREE.SRGBColorSpace;
            badgeTexture.flipY = true;

            badgeCtx.clearRect(0, 0, 256, 256);

            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = "/logo.png";
            img.onload = () => {
              // --- Badge logo ---
              const bLogoSize = SHIRT_LOGO_CONFIG.canvasLogoSize;
              const bLogoX = (256 - bLogoSize) / 2;
              const bLogoY = (256 - bLogoSize) / 2;
              badgeCtx.drawImage(img, bLogoX, bLogoY, bLogoSize, bLogoSize);

              badgeCtx.globalCompositeOperation = "source-in";
              badgeCtx.fillStyle = "#FFFFFF";
              badgeCtx.fillRect(0, 0, 256, 256);

              badgeTexture.needsUpdate = true;
            };

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                if (mesh.material) {
                  const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;

                  // Strip pink emissive everywhere just in case
                  mat.emissive = new THREE.Color(0x000000);
                  mat.emissiveIntensity = 0;
                  if (mat.emissiveMap) {
                    mat.emissiveMap = null;
                  }

                  const name = mesh.name.toLowerCase();

                  // Shirt / top / jacket → Black
                  if (name.includes("shirt") || name.includes("jacket") ||
                    name.includes("top") || name.includes("torso") ||
                    name.includes("upper") || name === "body.shirt") {
                    mat.color = new THREE.Color("#000000"); // Black
                  }
                  // Pants / trousers → dark navy
                  else if (name.includes("pant") || name.includes("trouser") ||
                    name.includes("leg") || name.includes("lower")) {
                    mat.color = new THREE.Color("#0D1B2A"); // dark navy
                  }
                  // Shoes / boots → dark grey
                  else if (name.includes("shoe") || name.includes("boot") ||
                    name.includes("foot") || name.includes("sole")) {
                    mat.color = new THREE.Color("#1a1a1a");
                  }
                  // Accessories / vest / bag / cap → SOLID BLUE (No Logo)
                  else if (name.includes("vest") || name.includes("cap") ||
                    name.includes("hat") || name.includes("collar") ||
                    name.includes("bag") || name.includes("accessory")) {
                    mat.color = new THREE.Color("#1B99D1");
                    mat.map = null;
                  }

                  // Hide the emissive floating screen pane to remove the visual artifact
                  if (name === "screenlight") {
                    mesh.visible = false;
                  }

                  if (!(window as any).characterMeshes) (window as any).characterMeshes = [];
                  (window as any).characterMeshes.push({ name: mesh.name, mat: mesh.material });

                  mesh.material = mat;
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            // ── Attach physical badge mesh to the chest ──
            // Scale and position driven by SHIRT_LOGO_CONFIG at the top of the file
            const badgeGeo = new THREE.PlaneGeometry(
              SHIRT_LOGO_CONFIG.planeWidth,
              SHIRT_LOGO_CONFIG.planeHeight
            );
            const badgeMat = new THREE.MeshBasicMaterial({
              map: badgeTexture,
              transparent: true,
              side: THREE.DoubleSide,
              depthTest: false,
              depthWrite: false,
            });
            const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);

            // Adjust logo position relative to the new scale so it sits nicely on the right chest
            badgeMesh.position.set(
              SHIRT_LOGO_CONFIG.positionX,
              SHIRT_LOGO_CONFIG.positionY,
              SHIRT_LOGO_CONFIG.positionZ
            );
            badgeMesh.name = "tshirtBadge";
            badgeMesh.renderOrder = 999;
            character.add(badgeMesh);

            resolve(gltf);
            setCharTimeline(character, camera);
            setCareerTimeline(); // Modified from setAllTimeline()

            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
