import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
import { LoadingProvider } from "./context/LoadingProvider";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Guidelines from "./pages/Guidelines";

const Home = () => (
  <MainContainer>
    <Suspense>
      <CharacterModel />
    </Suspense>
  </MainContainer>
);

// Wrapper that provides LoadingProvider context for site pages that need it
const WithLoading = ({ children }: { children: React.ReactNode }) => (
  <LoadingProvider>{children}</LoadingProvider>
);

const App = () => {
  return (
    <Suspense>
      <Routes>
        {/* Admin routes — placed FIRST, no LoadingProvider, no 3D loader */}
        {/* URL is cryptic to keep it hidden from the public */}
        <Route path="/wtr-admin-secure-v88" element={<AdminLogin />} />
        <Route path="/wtr-dashboard-v88" element={<AdminDashboard />} />

        {/* Main site routes — wrapped in LoadingProvider */}
        <Route path="/" element={<WithLoading><Home /></WithLoading>} />
        <Route path="/help" element={<WithLoading><Help /></WithLoading>} />
        <Route path="/terms" element={<WithLoading><Terms /></WithLoading>} />
        <Route path="/privacy" element={<WithLoading><Privacy /></WithLoading>} />
        <Route path="/guidelines" element={<WithLoading><Guidelines /></WithLoading>} />
      </Routes>
    </Suspense>
  );
};

export default App;
