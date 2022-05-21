import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import PersonalHome from './Home';

export default function PersonalDashboard() {
	return (
		<Layout presentLocation="/personal">
			<Routes>
				<Route path="/dashboard" element={<PersonalHome />} />
			</Routes>
		</Layout>
	);
}
