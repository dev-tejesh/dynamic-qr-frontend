import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QrCode, LayoutDashboard, BarChart2, Settings, HelpCircle, CreditCard, Users, LogOut } from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: 'My QR Codes', path: '/dashboard/qrcodes', icon: <QrCode className="h-5 w-5" /> },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <BarChart2 className="h-5 w-5" /> },
    { name: 'Team', path: '/dashboard/team', icon: <Users className="h-5 w-5" /> },
    { name: 'Billing', path: '/dashboard/billing', icon: <CreditCard className="h-5 w-5" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="hidden md:flex md:flex-col fixed inset-y-0 bg-white border-r border-gray-200 w-64 z-30">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          <QrCode className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">QRforge</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className={isActive(item.path) ? 'text-blue-700' : 'text-gray-500'}>{item.icon}</span>
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link
            to="/help"
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
          >
            <HelpCircle className="h-5 w-5 text-gray-500" />
            <span className="ml-3">Help & Support</span>
          </Link>
          <button className="mt-2 w-full flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50">
            <LogOut className="h-5 w-5 text-gray-500" />
            <span className="ml-3">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;