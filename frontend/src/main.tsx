import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThirdwebProvider>
    <AuthProvider>  {/* Wrap App with AuthProvider */}
      <App />
    </AuthProvider>
  </ThirdwebProvider>
);
