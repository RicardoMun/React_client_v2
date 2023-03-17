import { GeneralLayout } from "../Layout/GeneralLayout";

import { SignIn } from "../Pages/admin/SignIn";
import { AdminHome } from "../Pages/admin/AdminHome";

import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";

const AdminRoutes = [
    { path: "/admin", component: AdminHome, layout: GeneralLayout },
    { path: "/admin/sign-in", component: SignIn, layout: GeneralLayout },
];

const GeneralRoutes = [
    { path: "/", component: Home, layout: GeneralLayout },
    { path: "/contact", component: Contact, layout: GeneralLayout },
    { path: "*", component: NotFound, layout: GeneralLayout },
];

const AllRoutes = [...AdminRoutes, ...GeneralRoutes];
export default AllRoutes;