import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// components

import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderStats from '../components/Headers/HeaderStats';
import FooterAdmin from '../components/Footers/FooterAdmin';

// views

import Dashboard from '../views/admin/Dashboard';
import Settings from '../views/admin/Settings';
import Tables from '../views/admin/Tables';

export default function Admin() {
  useEffect(() => {
    toast.success(' ✘ sign in success!');
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
