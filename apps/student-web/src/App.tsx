import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<div className="p-6">Portail Étudiant — Dashboard (à implémenter)</div>} />
      <Route path="/profile" element={<div className="p-6">Mon profil (à implémenter)</div>} />
      <Route path="/schedule" element={<div className="p-6">Emploi du temps (à implémenter)</div>} />
      <Route path="/exams" element={<div className="p-6">Examens (à implémenter)</div>} />
      <Route path="/finance" element={<div className="p-6">Finance (à implémenter)</div>} />
      <Route path="/documents" element={<div className="p-6">Documents (à implémenter)</div>} />
      <Route path="/notifications" element={<div className="p-6">Notifications (à implémenter)</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}