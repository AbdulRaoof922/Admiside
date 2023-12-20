import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard/Dashboard"
import Setting from "../src/pages/Settings/Setting";
import Sidebar from "./components/Sidebar";
import LoginPage from './pages/AdminLogin/Login';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage/ProductPage";
import UserTable from "./pages/UserTable/UserTable";
// import ProductPage from './pages/ProductPage/ProductPage';

 const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/categorypage" element={<CategoryPage />} />
        <Route path="/Usertable" element={<UserTable />} />
        


      </Routes>
    </Router>
  );
};

export default App;
