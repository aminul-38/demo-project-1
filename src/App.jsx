import "./App.css";
import Home from "./component/Home/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Screen/UserScreen/Login";
import Signup from "./Screen/UserScreen/Signup";
import Aboutus from "./component/About Us/AboutUs";
import ErrorRouter from "./Screen/ErrorRouter/ErrorRouter";
import { Layout } from "./component/Layout/Layout";
import Packages from "./Screen/Packages/Packages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/Login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/Signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <Layout>
            <Aboutus />
          </Layout>
        }
      />
      <Route
        path="/Packages"
        element={
          <Layout>
            <Packages />
          </Layout>
        }
      />
      <Route path="*" element={<ErrorRouter />} />
    </Routes>
  );
}

export default App;
