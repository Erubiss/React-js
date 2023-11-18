import React, { createContext, useState, useEffect } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/contactUs/ContactUs";
import AboutUs from "./Components/aboutUs/AboutUs";
import dark from "./icons/dark.jpg";
import light from "./icons/light.jpg";

export const ContextProvider = createContext();

const App = () => {
  const addNotification = (text, type) => {
    toast(text, { type });
  };

  const localDarkMode = localStorage.getItem("darkMode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(localDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const contextValue = {
    addNotification,
    isDarkMode,
  };

  const backimg = () => (isDarkMode ? `url(${dark})` : `url(${light})`);

  const containerStyles = {
    margin: "auto",
    background: backimg(),
    backgroundAttachment: "scroll",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  return (
    <div>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div>
        <div style={containerStyles}>
          <ContextProvider.Provider value={contextValue}>
            <Routes>
              <Route
                path="/"
                element={<ToDo addNotification={addNotification} />}
              />
              <Route path="/singleTask/:id" element={<SingleTask />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </ContextProvider.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
