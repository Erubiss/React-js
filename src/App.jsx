import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

export const ContextProvider = createContext();

const App = () => {
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const [isDarkMode, setIsDarkMode] = useState(true);

  const contextValue = {
    addNotification,
    isDarkMode,
  };
  const containerStyles = { width: "90%", margin: "auto" };
  return (
    <>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div style={{background: isDarkMode ? "#2a3035" : "#EDEDF4"}}>
        <div style={containerStyles}>
          <ContextProvider.Provider value={contextValue}>
            <Routes>
              <Route
                path="/"
                element={<ToDo addNotification={addNotification} />}
              />
              <Route path="/singleTask/:id" element={<SingleTask />} />
              <Route path="/contact" />
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
    </>
  );
};

export default App;
