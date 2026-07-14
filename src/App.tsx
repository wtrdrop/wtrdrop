import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Guidelines from "./pages/Guidelines";
import Seo from "./components/Seo";
import Partner from "./pages/Partner";

const Home = () => (
  <MainContainer>
    <Seo
      title="WtrDrop | Fresh Water Delivery, On Demand"
      description="Order fresh drinking water from trusted local suppliers with WtrDrop. Schedule delivery, manage subscriptions, and track your order in real time."
    />
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
        {/* Main site routes — wrapped in LoadingProvider */}
        <Route path="/" element={<WithLoading><Home /></WithLoading>} />
        <Route path="/help" element={<WithLoading><Help /></WithLoading>} />
        <Route path="/terms" element={<WithLoading><Terms /></WithLoading>} />
        <Route path="/privacy" element={<WithLoading><Privacy /></WithLoading>} />
        <Route path="/guidelines" element={<WithLoading><Guidelines /></WithLoading>} />
        <Route path="/partner" element={<WithLoading><Partner /></WithLoading>} />
      </Routes>
    </Suspense>
  );
};

export default App;
