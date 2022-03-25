import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/loading";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import ProtectedRoute from './ProtectedRoute'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Homepage from "./components/homepage";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0A5995",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
 
  if (loading == true) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
              <Route path="/homepage" element={<Homepage />} />
              </Route>
              <Route path="/*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
        {/* <SignIn/>
    <SignUp/> */}
      </>
    );
  }
}

export default App;
