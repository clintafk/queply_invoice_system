import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import NewClient from "./pages/NewClient";
import NewInvoice from "./pages/NewInvoice";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Login from "./pages/Login";
import NewInvoice2 from "./pages/NewInvoice2";

import ActivityLogs from "./pages/ActivityLogs";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "Clients",
                element: <Clients />,
            },
            {
                path: "Invoices",
                element: <Invoices />,
            },
            {
                path: "new_invoice",
                element: <NewInvoice />,
            },
            {
                path: "/new_client",
                element: <NewClient />,
            },
            {
                path: "/activity_log",
                element: <ActivityLogs />,
            },
            {
                path: "/new_invoice2",
                element: <NewInvoice2 />,
            },
            {
                path: "New_Client",
                element: <NewClient/>,
            }
        ],
    },
    {
        element: <Login />,
        path: "/login",
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
);
