// import { Helmet } from "react-helmet-async";
// import {useSelector} from 'react-redux'
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

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
    </>
  );
}

export default App;
