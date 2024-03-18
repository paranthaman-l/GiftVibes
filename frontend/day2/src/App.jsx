import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/css/core.css'
import { Suspense, lazy } from 'react'
import Loader from './components/shared/Loader'
import WishList from './pages/user/WishList'
const CommonLayout = lazy(() => import('./layouts/Common'))
const UserLayout = lazy(() => import('./layouts/User'))
const ProfileLayOut = lazy(() => import('./layouts/Profile'))
const Login = lazy(() => import('./pages/auth/Login'))
const SignUp = lazy(() => import('./pages/auth/SignUp'))
const UserHome = lazy(() => import('./pages/user/Home'))
const Addresses = lazy(() => import('./pages/user/Addresses'))
const DashBoard = lazy(() => import('./pages/user/DashBoard'))
const BillingAddress = lazy(() => import('./pages/user/BillingAddress'))
const ShippingAddress = lazy(() => import('./pages/user/ShippingAddress'))
const AccountDetails = lazy(() => import('./pages/user/AccountDetails'))
const Downloads = lazy(() => import('./pages/user/Downloads'))
const MyOrders = lazy(() => import('./pages/user/MyOrders'))
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<CommonLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
            </Route>
            <Route element={<UserLayout />}>
              <Route path='/' element={<UserHome />} />
            </Route>
            <Route element={<ProfileLayOut />}>
              <Route path='/dashboard' element={<DashBoard />} />
              <Route path='/addresses' element={<Addresses />} />
              <Route path='/addresses/billing' element={<BillingAddress />} />
              <Route path='/addresses/shipping' element={<ShippingAddress />} />
              <Route path='/accountDetails' element={<AccountDetails />} />
              <Route path='/myOrders' element={<MyOrders />} />
              <Route path='/downloads' element={<Downloads />} />
              <Route path='/compare' element={<AccountDetails />} />
              <Route path='/wishlist' element={<WishList />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
