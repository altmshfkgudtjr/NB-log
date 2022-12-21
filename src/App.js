import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "pages/HomePage";
import MainPage from "pages/MainPage";
import ProfilePage from "pages/ProfilePage";
import ProjectPage from "pages/ProjectPage";
import MakingPage from "pages/MakingPage";
import TerminalPage from "pages/TerminalPage";
import PrintPage from "pages/PrintPage";
import NotFound from "pages/NotFound";
// Containers
import Header from "containers/Header";
import Modal from "containers/modal";
import PageLoading from "containers/common/PageLoading";
// hook
import useWebAccessibility from "lib/hooks/useWebAccessibility";
// lib
import * as loadingTime from "lib/loadingTime";

const App = () => {
  const [isMouseDown] = useWebAccessibility();

  return (
    <div className={isMouseDown ? "mousedown" : ""}>
      <Routes>
        <Route path="/print" element={<PrintPage />} exact />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </div>
  );
};

const AppContent = () => {
  return (
    <PageLoading limitTime={loadingTime.page}>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:projectTitle" element={<ProjectPage />} />
        <Route exact path="/making" element={<MakingPage />} />
        <Route exact path="/terminal" element={<TerminalPage />} />
        <Route element={<NotFound />} status={404} />
      </Routes>

      <Modal />
    </PageLoading>
  );
};

export default App;
