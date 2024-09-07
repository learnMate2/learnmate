
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import Dashboard from './pages/Dashboard';
import AskAi from './components/dashboard/AskAi';
import DashboardHome from './components/dashboard/DashboardHome';
import MyCourses from './components/dashboard/MyCourses';
import MyEarning from './components/dashboard/MyEarning';
import Books from './components/dashboard/Books';
import CareerCounseling from './components/dashboard/CareerCounseling';
import Admin from './pages/Admin';
import UploadContent from './components/dashboard/dashboardContent/UploadContent';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "*",
      element: <Notfound />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/dashboard/home",
      element: <DashboardHome />
    }
    ,
    {
      path: "/dashboard/ask-questions",
      element: <AskAi />
    }
    ,
    {
      path: "/dashboard/my-course",
      element: <MyCourses />
    }
    ,
    {
      path: "/dashboard/earning",
      element: <MyEarning />
    },
    {
      path: "/dashboard/careercounseling",
      element: <CareerCounseling />
    },
    {
      path: "/dashboard/books",
      element: <Books />
    },
    {
      path: "/admin",
      element: <Admin />
    },
    { path:"/dashboard/uploadcontent", element:<UploadContent/>}

  ])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
