"use client"

import Image from "next/image";
import MainButton from "./MainButton";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
} from "@heroui/react";

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

export default function NavbarComponent () {
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16}/>
    }
    return (
        <Navbar className="flex flex-row max-w-[1440px] w-full items-center justify-between">
            <NavbarBrand className="flex flex-row">
                <Image
                    src={"/logo.webp"}
                    alt="Logo"
                    width={32}
                    height={32}
                />
                <p className="font-bold text-black text-lg">Estatery</p>
            </NavbarBrand>
            <NavbarContent className="flex flex-row gap-8">
                <NavbarItem>
                    Rent
                </NavbarItem>
                <NavbarItem>
                    Buy
                </NavbarItem>
                <NavbarItem>
                    Sell
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
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
                        <DropdownItem
                            key="Example 1"
                        >
                            Example 1
                        </DropdownItem>
                        <DropdownItem
                            key="Example 2"
                        >
                            Example 2
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="flex items-center gap-1 p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                        <DropdownItem
                            key="example 1"
                        >
                            Example 1
                        </DropdownItem>
                        <DropdownItem
                            key="example 2"
                        >
                            Example 2
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <MainButton
                        text="Login"
                        bgColor="bg-secondary border-2 border-gray-300"
                        color="text-secondary"
                    />
                </NavbarItem>
                <NavbarItem>
                    <MainButton
                        text="Sign Up"
                        bgColor="bg-primary"
                        color="text-primary"
                    />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}