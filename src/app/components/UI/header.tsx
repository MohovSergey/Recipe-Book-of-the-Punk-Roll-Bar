"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { color } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
  return (
    <Image
      src={"/logo-punkroll-txt.svg"}
      alt="Punk Roll Bar"
      width={30}
      height={30}
      priority
    />
  );
};

export default function Header() {
  const navItems = [
    { href: "/", label: "Рецепты" },
    { href: "/igredientss", label: "Ингридиенты" },
    { href: "/about", label: "О нас" },
  ];

  const pathname = usePathname();


  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"}>
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
            const isActive = pathname === item.href;
          return (
            <NavbarItem key={crypto.randomUUID()}>
              <Link 
                className={`
                    px-3 py-1
                    ${isActive ? "text-blue-500" :
                    "text-foreground"}
                    hover: text-blue-300 hover: border
                    hover: border-blue-300 hover: rounded-md
                    transition-colors
                    transition-border
                    duration-200
                    `} href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


//29:16 https://www.youtube.com/watch?v=KZb53sf-PEg