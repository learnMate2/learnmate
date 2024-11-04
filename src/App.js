
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Notfound from './pages/Notfound';
import AskAi from './components/Student/dashboard/AskAi';
import DashboardHome from './components/Student/dashboard/DashboardHome';
import RequestedMeeting from './components/Student/dashboard/RequestedMeeting';
import MyEarning from './components/Student/dashboard/MyEarning';
import ScheduleMeeting from './components/Student/dashboard/ScheduleMeeting';
import CareerCounseling from './components/Student/dashboard/CareerCounseling';
import Admin from './pages/Admin';
import UploadContent from './components/Student/dashboard/dashboardContent/UploadContent';
import AdminDashboard from './components/admin/adminDashboard/AdminDashboard';
import ManageUser from './pages/ManageUser';
import YourUploadContent from './components/Student/dashboard/YourUploadContent';
import CareerCounselingPage from "./pages/CareerCounselingPage"
import CounsellorSignUp from "./components/Counsellor/pages/CounsellorSignUp"
import CounselorProfile from "./components/careerCounselingPage/CounselorProfile"
import CounsellorHome from './components/Counsellor/pages/CounsellorHome';
import CounsellorCompleteProfile from './components/Counsellor/pages/CounsellorCompleteProfile';
import CounsellorLogin from './components/Counsellor/pages/CounsellorLogin';
import CounsellorRequestedMeeting from "./components/Counsellor/pages/CounsellorRequestedMeeting"
import CounsellorScheduleMeeting from './components/Counsellor/pages/CounsellorScheduleMeeting';

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Login /> },
    { path: "/counsellor/login", element: <CounsellorLogin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/logout", element: <Signup /> },
    { path: "*", element: <Notfound /> },
    { path: "/dashboard", element: <DashboardHome /> },
    { path: "/dashboard/home", element: <DashboardHome /> },
    { path: "/dashboard/ask-questions", element: <AskAi /> },
    { path: "/dashboard/requestedmeeting", element: <RequestedMeeting /> },
    { path: "/dashboard/earning", element: <MyEarning /> },
    { path: "/dashboard/careercounseling", element: <CareerCounseling /> },
    { path: "/dashboard/schedulemeeting", element: <ScheduleMeeting /> },
    { path: "/admin", element: <Admin /> },
    { path: "/dashboard/uploadcontent", element: <UploadContent /> },
    { path: "/admin/home", element: <AdminDashboard /> },
    { path: "/admin/manageuser", element: <ManageUser /> },
    { path: "/hire/careercounseling", element: <CareerCounselingPage /> },
    { path: "/dashboard/youruploadcontent", element: <YourUploadContent /> }, 
    // --------------------
    { path: "/counsellor/signup", element: < CounsellorSignUp/> },
    {path: "/counselorprofile/:id", element: < CounselorProfile/>},
    {path: "/counsellor", element: < CounsellorHome/>},
    {path: "/counsellor/CounsellorCompleteProfile", element: < CounsellorCompleteProfile/>},
    {path: "/counsellor/allMeetingRequests", element: < CounsellorRequestedMeeting/>},
    {path: "/counsellor/scheduledMeeting", element: < CounsellorScheduleMeeting/>},


  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
