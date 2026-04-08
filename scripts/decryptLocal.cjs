const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
    const input = fs.readFileSync(inputFile);
    const iv = input.slice(0, 16);
    const encryptedData = input.slice(16);

    const key = crypto.createHash("sha256").update(password).digest();

    try {
        const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
        let decrypted = decipher.update(encryptedData);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        fs.writeFileSync(outputFile, decrypted);
        console.log("Decrypted successfully using password: " + password);
    } catch (e) {
        console.log("Failed to decrypt: " + e.message);
    }
};

// Try the password found in character.ts
decryptFile("d:/WEB/wtrdrop-webiste/public/models/character.enc", "d:/WEB/wtrdrop-webiste/public/models/character.glb", "Salex@2019");
