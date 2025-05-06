import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Products from "./pages/Products";
import Partners from "./pages/Partners";
import Reporting from "./pages/Reporting";
import Files from "./pages/Files";
import Connections from "./pages/Connections";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import AccountInformation from "./pages/AccountInformation";
import ManageUsers from "./pages/ManageUsers";
import UserProfile from "./pages/UserProfile";
import ProfileNotifications from "./pages/ProfileNotifications";
import ProfileMessage from "./pages/ProfileMessage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/files" element={<Files />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route
              path="/account-information"
              element={<AccountInformation />}
            />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route
              path="/profile-notifications"
              element={<ProfileNotifications />}
            />
            <Route path="/profile-message" element={<ProfileMessage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
