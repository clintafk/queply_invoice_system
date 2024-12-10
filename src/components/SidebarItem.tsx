import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
    Icon: IconType;
    text: string;
    to: string;
}

export default function SidebarItem({ Icon, text, to }: SidebarItemProps) {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive, isPending }) =>
                    `flex flex-row items-center gap-3 opacity-50 hover:opacity-100 ${
                        isPending
                            ? "pending"
                            : isActive
                              ? "active opacity-100"
                              : ""
                    }`
                }
            >
                <Icon />
                <span>{text}</span>
            </NavLink>
        </li>
    );
}
