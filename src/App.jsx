import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserLayout from "./layout/UserLayout";
import AllCars from "./pages/AllCars";
import UserBookings from "./pages/UserBookings";
import AdminPage from "./pages/AdminPage";
import AdminLayout from "./layout/AdminLayout";
import AdminAddCar from "./pages/AdminAddCar";
import AdminManageBookings from "./pages/AdminManageBookings";
import AdminManageCars from "./pages/AdminManageCars";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
{/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="all-cars" element={<AllCars />} />
          <Route path="user-bookings" element={<UserBookings />} />
        </Route>
        {/* Admin Layout */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="add-car" element={<AdminAddCar />} />
          <Route path="manage-bookings" element={<AdminManageBookings />} />
          <Route path="manage-cars" element={<AdminManageCars />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
