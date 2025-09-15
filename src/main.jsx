import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";



createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
					<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					</Routes>
		</BrowserRouter>
	</React.StrictMode>
);