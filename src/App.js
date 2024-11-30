import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import RequestedMeeting from "./components/Student/pages/RequestedMeeting";
import MyEarning from "./components/Student/pages/MyEarning";
import ScheduleMeeting from "./components/Student/pages/ScheduleMeeting";
import CareerCounseling from "./components/Student/pages/CareerCounseling";
import Admin from "./pages/Admin";
import UploadContent from "./components/Student/pages/UploadContent";
import YourUploadContent from "./components/Student/pages/YourUploadContent";
import CareerCounselingPage from "./pages/CareerCounselingPage";
import CounsellorSignUp from "./components/Counsellor/pages/CounsellorSignUp";
import CounselorProfile from "./components/Counsellor/pages/CounselorProfile";
import CounsellorHome from "./components/Counsellor/pages/CounsellorHome";
import CounsellorCompleteProfile from "./components/Counsellor/pages/CounsellorCompleteProfile";
import CounsellorLogin from "./components/Counsellor/pages/CounsellorLogin";
import CounsellorRequestedMeeting from "./components/Counsellor/pages/CounsellorRequestedMeeting";
import CounsellorScheduleMeeting from "./components/Counsellor/pages/CounsellorScheduleMeeting";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import CounsellorResponse from "./components/Counsellor/pages/CounsellorResponse";
import CounsellorUpdate from "./components/Counsellor/pages/CounsellorUpdate";
import Forgot from "./components/Student/pages/Forgot";
import Reset from "./components/Student/pages/Reset";
import AdminSignup from "./components/admin/pages/AdminSignup";
import AdminLogin from "./components/admin/pages/AdminLogin";
import AdminCounsellor from "./components/admin/pages/AdminCounsellor";
import AdminApproveCounsellor from "./components/admin/pages/AdminApproveCounsellor";
import AdminManageStudent from "./components/admin/pages/AdminManageStudent";
import StudentHome from "./components/Student/pages/StudentHome";
import AdminSetting from "./components/admin/pages/AdminSetting";
import StudentCounselorProfile from "./components/Student/pages/SudentCounsellorProfile";
import ListAllCounsellors from "./components/admin/pages/ListAllCounsellors";
import PirvacyPolicy from "./pages/PirvacyPolicy";
import StripeSuccess from "./components/stripe/StripeSuccess";
import PricingSection from "./components/stripe/PricingSection";

const App = () => {
  const router = createBrowserRouter([
    //----------------students----------------------
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/pirvacy-policy", element: <PirvacyPolicy /> },
    {path:"/stripe/success",element:<StripeSuccess/>},
    {path:"/PricingSection",element:<PricingSection/>},
    
    { path: "*", element: <Notfound /> },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <StudentHome />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/home",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <StudentHome />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/requestedmeeting",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <RequestedMeeting />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/earning",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <MyEarning />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/careercounseling",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <CareerCounseling />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/schedulemeeting",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <ScheduleMeeting />{" "}
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/uploadcontent",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <UploadContent />
        </ProtectedRoutes>
      ),
    },
    { path: "/hire/careercounseling", element: <CareerCounselingPage /> },
    {
      path: "/student/youruploadcontent",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <YourUploadContent />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/student/studentcounsellorprofile/:id",
      element: (
        <ProtectedRoutes allowRoles={["student"]}>
          <StudentCounselorProfile />
        </ProtectedRoutes>
      ),
    },
    //----------------Counsellor----------------------
    { path: "/counsellor/login", element: <CounsellorLogin /> },
    { path: "/counsellor/signup", element: <CounsellorSignUp /> },
    {
      path: "/counselorprofile/:id",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          <CounselorProfile />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/counsellor",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          <CounsellorHome />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/counsellor/CounsellorCompleteProfile",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          <CounsellorCompleteProfile />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/counsellor/allMeetingRequests",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          <CounsellorRequestedMeeting />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/counsellor/allMeetingRequests/response/:id",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          <CounsellorResponse />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/counsellor/scheduledMeeting",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          
          <CounsellorScheduleMeeting />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/counsellor/update",
      element: (
        <ProtectedRoutes allowRoles={["counsellor"]}>
          <CounsellorUpdate />
        </ProtectedRoutes>
      ),
    },
    { path: "/forgot-password", element: <Forgot /> },
    { path: "/reset-password", element: <Reset /> },
    //----------------Admin----------------------
    { path: "/admin", element: <Admin /> },
    {
      path: "/admin/home",
      element: (
        <ProtectedRoutes allowRoles={["admin"]}>
          <Admin />
        </ProtectedRoutes>
      ),
    },
    { path: "/admin/register", element: <AdminSignup /> },
    { path: "/admin/login", element: <AdminLogin /> },
    {
      path: "/admin/counsellorsrequests",
      element: (
        <ProtectedRoutes allowRoles={["admin"]}>
          <AdminCounsellor />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/admin/allcounsellors",
      element: (
        <ProtectedRoutes allowRoles={["admin"]}>
         <ListAllCounsellors/>
        </ProtectedRoutes>
      ),
    },
    {
      path: "/admin/approve-counsellor/:id",
      element: (
        <ProtectedRoutes allowRoles={["admin"]}>
          <AdminApproveCounsellor />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/admin/manage-student",
      element: (
        <ProtectedRoutes allowRoles={["admin"]}>
          <AdminManageStudent />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/admin/setting",
      element: (
        <ProtectedRoutes allowRoles={["admin"]}>
          <AdminSetting />
        </ProtectedRoutes>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      />
    </>
  );
};

export default App;
