import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";

// Pages (à implémenter par module)
// import { LoginPage } from "./pages/auth/Login";
// import { DashboardPage } from "./pages/analytics/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* Auth routes (sans layout) */}
      {/* <Route path="/login" element={<LoginPage />} /> */}

      {/* Routes protégées (avec layout) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<div className="p-6">Dashboard (à implémenter)</div>} />

        {/* Modules — à décommenter au fur et à mesure */}
        {/* Academic */}
        {/* <Route path="/academic/*" element={<AcademicRoutes />} /> */}
        {/* Students */}
        {/* <Route path="/students/*" element={<StudentRoutes />} /> */}
        {/* Teaching */}
        {/* <Route path="/teaching/*" element={<TeachingRoutes />} /> */}
        {/* Scheduling */}
        {/* <Route path="/scheduling/*" element={<SchedulingRoutes />} /> */}
        {/* Attendance */}
        {/* <Route path="/attendance/*" element={<AttendanceRoutes />} /> */}
        {/* Examinations */}
        {/* <Route path="/examinations/*" element={<ExaminationRoutes />} /> */}
        {/* Finance */}
        {/* <Route path="/finance/*" element={<FinanceRoutes />} /> */}
        {/* Documents */}
        {/* <Route path="/documents/*" element={<DocumentRoutes />} /> */}
        {/* Communication */}
        {/* <Route path="/communication/*" element={<CommunicationRoutes />} /> */}
        {/* Analytics */}
        {/* <Route path="/analytics/*" element={<AnalyticsRoutes />} /> */}
        {/* Administration */}
        {/* <Route path="/admin/*" element={<AdministrationRoutes />} /> */}
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}