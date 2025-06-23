import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import Layout from '../layout/Layout';
import LoginPage from '../../pages/login/LoginPage';
import RegisterPage from '../../pages/register/RegisterPage';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='/profile' element={<Profile/>} />
				</Route>
			</Routes>
		</>
	);
};
export default Router;
