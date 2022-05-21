import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import PersonalHome from './Home';

export default function PersonalDashboard() {
	return (
		<DashboardLayout>
			<Routes>
				<Route path="/dashboard" element={<PersonalHome />} />
			</Routes>
		</DashboardLayout>
	);
}
