import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import StudentsContent from '../components/StudentsContent';
import HeadBar from '../components/HeadBar';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Tambahkan state sidebarOpen

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'students':
        return <StudentsContent />;
      case 'dashboard':
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <HeadBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} /> {/* Kirimkan toggleSidebar */}
      <div className="flex flex-1">
        <Sidebar onMenuClick={handleMenuClick} isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} /> {/* Tambahkan props untuk Sidebar */}
        <main className="flex-1 p-4 sm:ml-64 mt-16">
          {/* Main content area */}
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
