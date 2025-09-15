"use client"

import Image from "next/image";
import MainButton from "./MainButton";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@heroui/dropdown";
import { useState } from "react";

interface Props {
    fill?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const ChevronDown = ({fill, size, height, width, ...props}: Props) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            />
        </svg>
    );
};

const HamburgerIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 6h18" />
        <path d="M3 12h18" />
        <path d="M3 18h18" />
    </svg>
);

export default function NavbarComponent () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16}/>
    }
    const menuItems = [
        "Rent",
        "Buy",
        "Sell",
        "Manage Property",
        "Resources"
    ]
    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="h-18 w-full items-center justify-between border-b-3 border-gray-100" maxWidth="full">
            <NavbarContent>
                <NavbarItem className="flex items-center">
                    <NavbarMenuToggle
                        aria-label={"Open navigation menu"}
                        className="md:hidden block text-black z-50"
                        icon={<HamburgerIcon />}
                    />
                    <NavbarBrand className="flex flex-row">
                        <Image
                            src={"/logo.webp"}
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                        <p className="font-bold text-black text-lg">Estatery</p>
                    </NavbarBrand>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden md:flex flex-row gap-1 sm:gap-4 lg:gap-12 transition-all" justify="center">
                <NavbarItem><button aria-label={"Go to Rent page"}>Rent</button></NavbarItem>
                <NavbarItem><button aria-label={"Go to Buy page"}>Buy</button></NavbarItem>
                <NavbarItem><button aria-label={"Go to Sell page"}>Sell</button></NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                type="button"
                                aria-label="Manage Property"
                                disableRipple
                                className="flex items-center gap-1 p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Manage Property
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Manage properties"
                        itemClasses={{ base: "gap-4" }}
                    >
                        <DropdownItem key="Example 1">
                            Example 1
                        </DropdownItem>
                        <DropdownItem key="Example 2">
                            Example 2
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                type="button"
                                aria-label="Resources"
                                disableRipple
                                className="flex items-center p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Resources
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="resources"
                        itemClasses={{ base: "gap-4" }}
                    >
                        <DropdownItem key="example 1">
                            Example 1
                        </DropdownItem>
                        <DropdownItem key="example 2">
                            Example 2
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarContent justify="end" >
                <NavbarItem>
                    <MainButton
                        text="Login"
                        bgColor="bg-secondary outline outline-2 outline-gray-300"
                        color="text-secondary"
                    />
                </NavbarItem>
                <NavbarItem>
                    <MainButton
                        text="Sign up"
                        bgColor="bg-primary"
                        color="text-white"
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-white px-4 pt-6">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className="w-full">
                        <button className="w-full text-left py-3" onClick={() => setIsMenuOpen(false)}>
                            {item}
                        </button>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}