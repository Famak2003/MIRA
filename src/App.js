// import { Helmet } from "react-helmet-async";
// import {useSelector} from 'react-redux'
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { RouterProvider } from "react-router-dom";
import "./services/locale/config"; // import the i18n configuration
import router from "./router/router";
// import { Suspense } from "react";

function App() {
  // const userStatus = useSelector((state)=> state.auth.userLogin)

  // console.log(userStatus)

  return (
    <>
      {/* <Helmet>
        // <title>Chat AI</title>
        //{" "}
      </Helmet> */}
      <Toaster position={"top-right"} />
      <div className="App h-fit max-w-[150rem] ">
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
      </Suspense> */}
    </>
  );
}

export default App;
