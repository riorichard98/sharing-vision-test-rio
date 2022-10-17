import {
    createBrowserRouter
  } from "react-router-dom";

import App from './App';
import ErrorPage from './views/errorPage';
import AllPost from "./views/allPostPage";
import AddPost from "./views/AddPost";
 const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
              element: <AllPost />,
              index: true
            },
            {
              path: "add-post",
              element: <AddPost/>,
            },
            {
              path: "preview",
              element : <div>this is preview</div>
            }
          ]
    },
]);

export default router