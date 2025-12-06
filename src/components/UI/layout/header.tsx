"use client";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/registration.modals";
import LoginModal from "../modals/login.modal";
import { useState } from "react";

export const Logo = () => {
  return (
    <Image
      src={"/logo-punkroll-txt.svg"}
      alt={siteConfig.title}
      width={30}
      height={30}
      priority
    />
  );
};

export default function Header() {
const [isLoginOpen, setIsloginOpen] = useState(false);
const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const pathname = usePathname();

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={crypto.randomUUID()}>
          <Link
            className={`
                px-3 py-1
                ${isActive ? "text-blue-500" : "text-foreground"}
                hover: text-blue-300 hover: border
                hover: border-blue-300 hover: rounded-md
                transition-colors
                transition-border
                duration-200
                `}
            href={item.href}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar style={{height: layoutConfig.headerHeight}}>
      <NavbarBrand>
        <Link href={"/"}>
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button 
            as={Link} 
            color="primary" 
            href="#" 
            variant="flat"
            onPress={()=>setIsloginOpen(true)}
          >
            Логин
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="#" 
            variant="flat"
            onPress={()=>setIsRegistrationOpen(true)}
          >
            Зарегистрироваться
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal 
      isOpen={isRegistrationOpen}
      onClose={()=>setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen}
      onClose={()=>setIsloginOpen(false)}      
      />

    </Navbar>
  );
}

//29:16 https://www.youtube.com/watch?v=KZb53sf-PEg
