import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@university/utils";
import { Button } from "@university/ui";

const navItems = [
  { path: "/dashboard", label: "Tableau de bord", icon: "📊" },
  { path: "/academic", label: "Académique", icon: "🎓" },
  { path: "/students", label: "Étudiants", icon: "👥" },
  { path: "/teaching", label: "Enseignement", icon: "📚" },
  { path: "/scheduling", label: "Emplois du temps", icon: "📅" },
  { path: "/attendance", label: "Présences", icon: "✅" },
  { path: "/examinations", label: "Examens", icon: "📝" },
  { path: "/finance", label: "Finance", icon: "💰" },
  { path: "/documents", label: "Documents", icon: "📄" },
  { path: "/communication", label: "Communication", icon: "💬" },
  { path: "/analytics", label: "Analytics", icon: "📈" },
  { path: "/admin", label: "Administration", icon: "⚙️" },
];

export function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-blue-600">INEDIT Université</h1>
          <p className="text-xs text-gray-500">Administration</p>
        </div>
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Button variant="ghost" size="sm" className="w-full">
            Déconnexion
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}