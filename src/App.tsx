import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import { MdDashboard, MdGroups, MdOutlineRequestPage } from "react-icons/md";

export default function App() {
    return (
        <div className="flex h-screen w-screen flex-row">
            <div className="h-screen w-[265px]">
                <Sidebar>
                    <SidebarItem Icon={MdDashboard} text="Dashboard" to="/" />
                    <SidebarItem
                        Icon={MdOutlineRequestPage}
                        text="Invoices"
                        to="/invoices"
                    />
                    <SidebarItem Icon={MdGroups} text="Clients" to="/clients" />
                </Sidebar>
            </div>

            <div className="flex w-full flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
