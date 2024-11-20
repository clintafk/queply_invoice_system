import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import Invoices from "./pages/Invoices.tsx";
import Login from "./pages/Login.tsx";
import NewClient from "./pages/NewClient.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/invoices",
        element: <Invoices />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/new_client",
        element: <NewClient />,
    },
    // {
    //     path: "/clients",
    //     element: <Clients />,
    // },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
