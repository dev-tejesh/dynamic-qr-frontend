import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, Search, ChevronDown, Plus, QrCode } from 'lucide-react';
import Button from '../common/Button';

const DashboardHeader: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center md:hidden">
              <button 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-between">
              <div className="flex-1 flex items-center">
                <div className="max-w-lg w-full">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search QR codes..."
                    />
                  </div>
                </div>
              </div>

              <div className="ml-4 flex items-center md:ml-6 space-x-3">
                <Link to="/dashboard/create">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    leftIcon={<Plus className="h-4 w-4" />}
                  >
                    Create QR
                  </Button>
                </Link>

                <div className="relative">
                  <button
                    onClick={toggleNotifications}
                    className="p-1 text-gray-500 rounded-full hover:bg-gray-100 relative"
                  >
                    <Bell className="h-6 w-6" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
                  </button>

                  {isNotificationsOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-2 px-4 border-b border-gray-100">
                        <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        <div className="py-2 px-4 border-b border-gray-100 hover:bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Your QR code "Product Brochure" has 50 new scans</p>
                          <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                        </div>
                        <div className="py-2 px-4 border-b border-gray-100 hover:bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Weekly analytics report is ready</p>
                          <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                        </div>
                        <div className="py-2 px-4 hover:bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Your subscription will renew in 7 days</p>
                          <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                        </div>
                      </div>
                      <div className="py-2 px-4 border-t border-gray-100 text-center">
                        <Link to="/dashboard/notifications" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                          View all notifications
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-medium">
                      JD
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">John Doe</span>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-500 hidden md:block" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <Link to="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Your Profile
                        </Link>
                        <Link to="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Settings
                        </Link>
                        <Link to="/dashboard/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Billing
                        </Link>
                        <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={toggleMobileMenu}
          ></div>

          {/* Sidebar */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close sidebar</span>
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <Link to="/" className="flex items-center space-x-2">
                  <QrCode className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">QRforge</span>
                </Link>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                <Link
                  to="/dashboard"
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <LayoutDashboard className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                  Dashboard
                </Link>
                {/* Add other mobile navigation items here */}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;