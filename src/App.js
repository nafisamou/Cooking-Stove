import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { routes } from "./Router/Routes/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
