import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
// ShadCN components
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    return (
        <header className="flex flex-row justify-between rounded-sm border-b px-10 py-7">
            <span className="text-sm font-light">Queply Innovations</span>
            <div className="flex cursor-pointer flex-row items-center gap-2 text-sm font-light hover:text-teal-500">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex flex-row items-center gap-2">
                        <div>
                            <span>John</span>
                            <span> Doe</span>
                        </div>
                        <IoIosArrowDown />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mb-1 mt-1">
                        <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                            <MdPerson />
                            <Link to="/profile">Profile</Link>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="flex flex-row items-center gap-2 rounded">
                            <MdLogout />
                            Logout
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
