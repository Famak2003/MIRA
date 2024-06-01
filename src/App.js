import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { RouterProvider } from "react-router-dom";
import "./services/locale/config"; // import the i18n configuration
import router from "./router/router";
// import { Suspense } from "react";

function App() {
  return (
    <>
      <Toaster position={"top-right"} />
      <div className="App h-fit max-w-[150rem] ">
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
