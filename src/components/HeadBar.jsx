/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Navbar, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";

const HeadBar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          type="button"
          className="sm:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-[#1C1C1C]"
          aria-label="Toggle sidebar"
        >
          <span className="sr-only">Toggle sidebar</span>
          <svg
            className="w-6 h-6 text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          <div className="flex flex-col items-end mr-4">
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <Dropdown placement="bottom-end" isOpen={dropdownOpen} onOpenChange={handleDropdownToggle}>
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="John Doe"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">john.doe@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HeadBar;
