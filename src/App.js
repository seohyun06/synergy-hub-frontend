// src/App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./global/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default App;
