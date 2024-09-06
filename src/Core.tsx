import { useState, useEffect } from "react";
import { App, Loader, Home, Footer, Stats } from "./components";
import GithubCorner from "react-github-corner";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function core() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GithubCorner href="https://github.com/whirlxd/img-to-pdf" />
                <Home /> <Stats />
                <Footer />
              </>
            }
          />
          <Route
            path="/app"
            element={
              <>
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    {" "}
                    <GithubCorner href="https://github.com/whirlxd/img-to-pdf" />
                    <App />
                  </>
                )}
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <GithubCorner href="https://github.com/whirlxd/img-to-pdf" />
                <Home /> <Stats />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
