'use client'; 

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function MainNav() {
  const customNavLinkStyle = "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 data-[active]:bg-gray-200 data-[state=open]:bg-gray-200";

  const customNavTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-200 data-[active]:bg-gray-200";

  return (
    <div className="bg-gray-50 py-2 border-t border-b border-gray-200 px-5"> 
      <div className="container mx-auto flex justify-center items-center text-sm font-semibold text-gray-700">
        <NavigationMenu>
          <NavigationMenuList className="space-x-1"> 
            {/* HOME */}
            <NavigationMenuItem>
              <Link href="/" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  HOME
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* ABOUT */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={customNavTriggerStyle}>ABOUT</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[150px] gap-2 p-2">
                  <li><Link href="/about/history" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">History</NavigationMenuLink></Link></li>
                  <li><Link href="/about/mission" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">Mission</NavigationMenuLink></Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* DEPARTMENTS */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={customNavTriggerStyle}>DEPARTMENTS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] gap-2 p-2">
                  <li><Link href="/departments/cse" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">CSE</NavigationMenuLink></Link></li>
                  <li><Link href="/departments/ece" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">ECE</NavigationMenuLink></Link></li>
                  <li><Link href="/departments/me" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">ME</NavigationMenuLink></Link></li>
                  <li><Link href="/departments/ee" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">EE</NavigationMenuLink></Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* ACADEMICS */}
            <NavigationMenuItem>
              <Link href="/academics" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  ACADEMICS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* INFRASTRUCTURE */}
            <NavigationMenuItem>
              <Link href="/infrastructure" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  INFRASTRUCTURE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* ADMISSION */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={customNavTriggerStyle}>ADMISSION</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[150px] gap-2 p-2">
                  <li><Link href="/admission/ug" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">UG</NavigationMenuLink></Link></li>
                  <li><Link href="/admission/pg" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">PG</NavigationMenuLink></Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* TENDERS */}
            <NavigationMenuItem>
              <Link href="/tenders" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  TENDERS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* EXAMINATION */}
            <NavigationMenuItem>
              <Link href="/examination" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  EXAMINATION
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* PLACEMENT */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={customNavTriggerStyle}>PLACEMENT</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[150px] gap-2 p-2">
                  <li><Link href="/placement/records" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">Records</NavigationMenuLink></Link></li>
                  <li><Link href="/placement/companies" passHref><NavigationMenuLink className="block p-2 rounded-md hover:bg-accent">Companies</NavigationMenuLink></Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* LIBRARY */}
            <NavigationMenuItem>
              <Link href="/library" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  LIBRARY
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* CAREER */}
            <NavigationMenuItem>
              <Link href="/career" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  CAREER
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* CONTACT */}
            <NavigationMenuItem>
              <Link href="/contact" passHref> 
                <NavigationMenuLink className={customNavLinkStyle}>
                  CONTACT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}