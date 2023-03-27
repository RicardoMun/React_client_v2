import { GeneralLayout } from "../Layout/GeneralLayout";

import { SignIn } from "../pages/admin/Sign-In";
import { AdminHome } from "../pages/admin/AdminHome";

import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

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