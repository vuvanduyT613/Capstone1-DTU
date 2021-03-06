import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderStats from '../components/Headers/HeaderStats';
import FooterAdmin from '../components/Footers/FooterAdmin';

// views
import Dashboard from '../views/admin/Dashboard';
import Doctor from '../views/admin/Doctor';
import Patient from '../views/admin/Patients';
import Appointment from '../views/admin/Appointment';
import Add from '../views/admin/Add';
import AddApointment from '../views/admin/AddAppointment';
import Clinic from '../views/admin/Clinic';
import CardClinic from '../views/admin/AddClinic';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/doctor" exact component={Doctor} />
            <Route path="/admin/patient" exact component={Patient} />
            <Route path="/admin/appointment" exact component={Appointment} />
            <Route path="/admin/add/:slug" exact component={({ match }) => <Add match={match} />} />
            <Route path="/admin/clinic" exact component={Clinic} />
            <Route
              path="/admin/clinic/add/:slug"
              exact
              component={({ match }) => <CardClinic match={match} />}
            />
            <Route
              path="/admin/ap/add/:slug"
              exact
              component={({ match }) => <AddApointment match={match} />}
            />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
