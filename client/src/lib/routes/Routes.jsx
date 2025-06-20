import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import Layout from '../layout/Layout';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='/:id' element={<Profile />} />
				</Route>
			</Routes>
		</>
	);
};
export default Router;
