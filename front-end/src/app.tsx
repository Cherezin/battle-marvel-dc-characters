import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateBattleHeros } from "./pages/home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateBattleHeros />,
  },
]);


export function App() {
  return <RouterProvider router={router} />
}