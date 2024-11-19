import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import "./index.css";

const queryClient = new QueryClient(); 
const router = createBrowserRouter([
    {
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Dashboard/>,
        },
        {
          path: "Clients",
          element: <Clients/>,
        },
        {
          path: "Invoices",
          element: <Invoices/>,
        },
      ],
    },
    {
      element: <Login/>,
      path: "/login",
    }
  ]);   

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
        
    </StrictMode>,
);
