import { useRoutes } from "react-router-dom";
import { Cadastrar } from "../pages/Cadastrar";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const SiteRoutes = () => {
    return useRoutes([
        { path: '/', element: <Login /> },
        { path: '/cadastrar', element: <Cadastrar /> },
        { path: '/home', element: <Home /> }
    ]);
}