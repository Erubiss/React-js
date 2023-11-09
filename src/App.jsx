import React, { createContext } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
export const ContextProvider = createContext();

const App = () => {
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const contextValue = {
    addNotification,
  };
  const containerStyles = { width: "90%", margin: "auto",};
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default App;
