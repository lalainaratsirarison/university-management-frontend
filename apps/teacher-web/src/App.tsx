import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<div className="p-6">Portail Enseignant — Dashboard (à implémenter)</div>} />
      <Route path="/schedule" element={<div className="p-6">Emploi du temps (à implémenter)</div>} />
      <Route path="/attendance" element={<div className="p-6">Présences (à implémenter)</div>} />
      <Route path="/exams" element={<div className="p-6">Examens (à implémenter)</div>} />
      <Route path="/teaching" element={<div className="p-6">Mes enseignements (à implémenter)</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}