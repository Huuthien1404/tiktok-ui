import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Upload from "../Pages/Upload";
import HeaderOnly from "../components/Layout/HeaderOnly";
export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly}
]
export const privateRoutes = []