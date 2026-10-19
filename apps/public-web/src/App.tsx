import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="p-6">INEDIT Université — Site public (à implémenter)</div>} />
      <Route path="/formations" element={<div className="p-6">Formations (à implémenter)</div>} />
      <Route path="/admission" element={<div className="p-6">Admission (à implémenter)</div>} />
      <Route path="/candidature" element={<div className="p-6">Candidature en ligne (à implémenter)</div>} />
      <Route path="/candidature/:trackingId" element={<div className="p-6">Suivi candidature (à implémenter)</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}