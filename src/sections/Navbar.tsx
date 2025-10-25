// components/layout/Navbar.tsx
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Facebook, Twitter, Youtube, Instagram, ChevronDown } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-blue-900 text-white p-2 text-xs">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700 h-6 w-6">
                        <Facebook className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700 h-6 w-6">
                        <Twitter className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700 h-6 w-6">
                        <Youtube className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700 h-6 w-6">
                        <Instagram className="h-3 w-3" />
                    </Button>
                </div>

                <div className="flex items-center font-semibold cursor-pointer">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Activities <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>News</DropdownMenuItem>
                            <DropdownMenuItem>Events</DropdownMenuItem>
                            <DropdownMenuItem>NSS Activities</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Notice
                            </Button>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Alumni <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>Alumni</DropdownMenuItem>
                            <DropdownMenuItem>Alumni Membership Registration</DropdownMenuItem>
                            <DropdownMenuItem>Alumni Event Registration</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Approval/Accreditation <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>AICTE</DropdownMenuItem>
                            <DropdownMenuItem>MAKAUT</DropdownMenuItem>
                            <DropdownMenuItem>NBA</DropdownMenuItem>
                            <DropdownMenuItem>NAAC</DropdownMenuItem>
                            <DropdownMenuItem>NIRF(Engineering)</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                IQAC <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>About IQACs</DropdownMenuItem>
                            <DropdownMenuItem>Compositions</DropdownMenuItem>
                            <DropdownMenuItem>Meetings</DropdownMenuItem>
                            <DropdownMenuItem>Reports</DropdownMenuItem>
                            <DropdownMenuItem>NAAC SSR</DropdownMenuItem>
                            <DropdownMenuItem>NAAC AQAR 2020-21</DropdownMenuItem>
                            <DropdownMenuItem>NAAC AQAR 2021-22</DropdownMenuItem>
                            <DropdownMenuItem>NAAC AQAR 2022-23</DropdownMenuItem>
                            <DropdownMenuItem>NAAC AQAR 2023-24</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Feedback <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>Current(2024 onwards)</DropdownMenuItem>
                            <DropdownMenuItem>Previous</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Gallery <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>Images</DropdownMenuItem>
                            <DropdownMenuItem>Videos</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Disclosure
                            </Button>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Collaboration <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>Foreign Collaboration</DropdownMenuItem>
                            <DropdownMenuItem>Corporate Collaboration</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Downloads <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>AICTE Approvals</DropdownMenuItem>
                            <DropdownMenuItem>Other Approvals</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="text-white/50">|</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-blue-700 text-xs h-auto px-2 py-1 flex items-center gap-1">
                                Employee Corner <ChevronDown className="h-1 w-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-xs bg-blue-700 rounded-0xl text-white">
                            <DropdownMenuItem>Sign Up</DropdownMenuItem>
                            <DropdownMenuItem>Links/Downloads</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}