import React, { Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/route";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
function App() {
  useEffect(() => {
    fethAPI();
  }, []);

  const fethAPI = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/allProducts`
    );
    console.log("res", res);
  };
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
