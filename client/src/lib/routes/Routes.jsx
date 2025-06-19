import { Route, Routes } from "react-router-dom"
import Home from "../../pages/home/Home"
import Profile from "../../pages/profile/Profile"

const Router = () => {
    return<>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Profile/>}/>
    </Routes>
    </>
}
export default Router