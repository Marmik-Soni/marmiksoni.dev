import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

{/* Page Imports */}
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Practices from "./pages/Practices";
import Quotes from "./pages/Quotes";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <MyWork />
              <Blogs />
              <ContactMe />
            </>
          }
        />
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="/Practice" element={<Practices />}></Route>
        <Route path="/Quotes" element={<Quotes />}></Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
