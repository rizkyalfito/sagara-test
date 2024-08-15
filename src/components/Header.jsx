import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu
} from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../assets/icons/Icons.jsx";
import logo from '../assets/img/sagara-logo.svg';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar>
      <NavbarBrand className="flex items-center space-x-4">
        <img src={logo} alt="SAGARA Logo" className="h-10" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 ml-4" justify="start">
        <NavbarItem>
          <Link as={RouterLink} to="/" color="foreground" className="text-[#9E9E9E] font-light">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={RouterLink} to="/dashboard" color="foreground" className="text-[#9E9E9E] font-light">
            Dashboard
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[#9E9E9E] font-light"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                CAREERS
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME careers"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="job_openings"
              description="Find the latest job openings and career opportunities at ACME."
              startContent={icons.lock}
            >
              Job Openings
            </DropdownItem>
            <DropdownItem
              key="internships"
              description="Explore internships and student programs to kickstart your career."
              startContent={icons.activity}
            >
              Internships
            </DropdownItem>
            <DropdownItem
              key="work_culture"
              description="Learn more about our work culture and employee benefits."
              startContent={icons.flash}
            >
              Work Culture
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link as={RouterLink} to="/faq" color="foreground" className="text-[#9E9E9E] font-light">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={RouterLink} to="/dashboard" variant="flat" className="text-white bg-[#A51535] hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
