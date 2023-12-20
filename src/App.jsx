import LoginPage from "./pages/Login/LoginPage";
import StudentPage from "./pages/Student/StudentPage";
import AcademicianPage from "./pages/Academician/AcademicianPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/academician" element={<AcademicianPage />} />
      </Routes>
    </>
  );
}

export default App;
