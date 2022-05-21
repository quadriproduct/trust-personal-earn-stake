import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import BusinessHome from './Home';


export default function BusinessDashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/dashboard" element={<BusinessHome />} />
      </Routes>
    </DashboardLayout>
  )
}
