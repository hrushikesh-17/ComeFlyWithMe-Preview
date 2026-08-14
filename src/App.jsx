import { Suspense } from "react";

// =====================================================
// PACKAGE PAGE
// =====================================================

import PackagePage from "./pages/user/unprotectedRoutes/packagepage/PackagePage";

// =====================================================
// PACKAGE CONFIG TEST
// =====================================================

import { runPackageConfigTest } from "./utils/testPackageConfigs";

// Run package configuration test once when App loads
runPackageConfigTest();

// =====================================================
// ROUTING
// =====================================================

import { Routes, Route } from "react-router-dom";

// =====================================================
// ALERT
// =====================================================

import { Toaster } from "react-hot-toast";

// =====================================================
// LOADER
// =====================================================

import Loader from "./utils/loader/Loader";

// =====================================================
// PROTECTED ROUTES
// =====================================================

import UserAuthProtectedRoutes from "./protectedRoutes/user/UserAuthProtectedRoutes";
import UserAccountProtectedRoutes from "./protectedRoutes/user/UserAccountProtectedRoutes";
import AdminAuthProtectedRoutes from "./protectedRoutes/admin/AdminAuthProtectedRoutes";
import AdminAccountProtectedRoutes from "./protectedRoutes/admin/AdminAccountProtectedRoutes";

// =====================================================
// LAYOUTS
// =====================================================

import UserRouteLayout from "./layouts/user/UserRouteLayout";
import AuthRouteLayout from "./layouts/auth/AuthRouteLayout";
import AdminRouteLayout from "./layouts/admin/AdminRouteLayout";

// =====================================================
// GLOBAL COMPONENTS
// =====================================================

import Fallback from "./components/global/fallback/Fallback";
import MobileScreen from "./components/global/mobileScreen/MobileScreen";

// =====================================================
// USER PAGE CONFIG
// =====================================================

import {
  // ---------------------------------------------------
  // AUTH
  // ---------------------------------------------------

  UserSignup,
  UserLogin,
  UserChangePassword,
  UserForgetPassword,
  UserOtp,

  // ---------------------------------------------------
  // PROTECTED
  // ---------------------------------------------------

  UserProfile,
  UserMyTrips,

  // ---------------------------------------------------
  // GENERAL
  // ---------------------------------------------------

  UserHome,
  UserAbout,
  UserPrivacyPolicy,
  UserRefundPolicy,
  UserTermsAndCondition,

  // ---------------------------------------------------
  // BALI
  // ---------------------------------------------------

  UserBali,
  UserBaliFriends,
  UserBaliFamily,
  UserBaliCouple,
  UserBaliCustom,

  // ---------------------------------------------------
  // PHUKET
  // ---------------------------------------------------

  UserPhuket,
  UserPhuketFriends,
  UserPhuketFamily,
  UserPhuketCouple,
  UserPhuketCustom,

  // ---------------------------------------------------
  // VIETNAM
  // ---------------------------------------------------

  UserVietnam,
  UserVietnamFriends,
  UserVietnamFamily,
  UserVietnamCouple,
  UserVietnamCustom,

  // ---------------------------------------------------
  // MALAYSIA
  // ---------------------------------------------------

  UserMalaysia,
  UserMalaysiaFriends,
  UserMalaysiaFamily,
  UserMalaysiaCouple,
  UserMalaysiaCustom,

  // ---------------------------------------------------
  // SINGAPORE
  // ---------------------------------------------------

  UserSingapore,
  UserSingaporeFriends,
  UserSingaporeFamily,
  UserSingaporeCouple,
  UserSingaporeCustom,

  // ---------------------------------------------------
  // PHILIPPINES
  // ---------------------------------------------------

  UserPhilippines,
  UserPhilippinesFriends,
  UserPhilippinesFamily,
  UserPhilippinesCouple,
  UserPhilippinesCustom,

  // ---------------------------------------------------
  // BOOKING
  // ---------------------------------------------------

  UserBooking,
} from "./pageConfig/UserPageConfig";

// =====================================================
// ADMIN PAGE CONFIG
// =====================================================

import {
  AdminLogin,
  AdminOtp,
  AdminDashboard,
  AdminUsers,
  AdminTrips,
  AdminSingleTripDetails,
  AdminCustom,
  AdminPayment,
  AdminQueries,
  AdminNewsLetter,
} from "./pageConfig/AdminPageConfig";

// =====================================================
// USER AUTH ROUTES
// =====================================================

const userAuthRoutesData = [
  {
    path: "/signup",
    element: <UserSignup />,
  },

  {
    path: "/login",
    element: <UserLogin />,
  },

  {
    path: "/change-password",
    element: <UserChangePassword />,
  },

  {
    path: "/forget-password",
    element: <UserForgetPassword />,
  },

  {
    path: "/otp",
    element: <UserOtp />,
  },
];

// =====================================================
// PACKAGE ROUTE HELPER
// =====================================================
//
// Every package URL is handled by PackagePage.
//
// Example:
//
// /bali/friends/standard
// /bali/friends/delux
// /bali/friends/premium
//
// /vietnam/family/standard
// /singapore/couple/premium
// /philippines/custom/delux
//
// PackagePage reads the URL and finds the matching
// config/config.js file automatically.
// =====================================================

const packageRoutes = [
  // ===================================================
  // BALI
  // ===================================================

  "/bali/friends/standard",
  "/bali/friends/delux",
  "/bali/friends/premium",

  "/bali/family/standard",
  "/bali/family/delux",
  "/bali/family/premium",

  "/bali/couple/standard",
  "/bali/couple/delux",
  "/bali/couple/premium",

  "/bali/custom/standard",
  "/bali/custom/delux",
  "/bali/custom/premium",

  // ===================================================
  // PHUKET
  // ===================================================

  "/phuket/friends/standard",
  "/phuket/friends/delux",
  "/phuket/friends/premium",

  "/phuket/family/standard",
  "/phuket/family/delux",
  "/phuket/family/premium",

  "/phuket/couple/standard",
  "/phuket/couple/delux",
  "/phuket/couple/premium",

  "/phuket/custom/standard",
  "/phuket/custom/delux",
  "/phuket/custom/premium",

  // ===================================================
  // VIETNAM
  // ===================================================

  "/vietnam/friends/standard",
  "/vietnam/friends/delux",
  "/vietnam/friends/premium",

  "/vietnam/family/standard",
  "/vietnam/family/delux",
  "/vietnam/family/premium",

  "/vietnam/couple/standard",
  "/vietnam/couple/delux",
  "/vietnam/couple/premium",

  "/vietnam/custom/standard",
  "/vietnam/custom/delux",
  "/vietnam/custom/premium",

  // ===================================================
  // MALAYSIA
  // ===================================================

  "/malaysia/friends/standard",
  "/malaysia/friends/delux",
  "/malaysia/friends/premium",

  "/malaysia/family/standard",
  "/malaysia/family/delux",
  "/malaysia/family/premium",

  "/malaysia/couple/standard",
  "/malaysia/couple/delux",
  "/malaysia/couple/premium",

  "/malaysia/custom/standard",
  "/malaysia/custom/delux",
  "/malaysia/custom/premium",

  // ===================================================
  // SINGAPORE
  // ===================================================

  "/singapore/friends/standard",
  "/singapore/friends/delux",
  "/singapore/friends/premium",

  "/singapore/family/standard",
  "/singapore/family/delux",
  "/singapore/family/premium",

  "/singapore/couple/standard",
  "/singapore/couple/delux",
  "/singapore/couple/premium",

  "/singapore/custom/standard",
  "/singapore/custom/delux",
  "/singapore/custom/premium",

  // ===================================================
  // PHILIPPINES
  // ===================================================

  "/philippines/friends/standard",
  "/philippines/friends/delux",
  "/philippines/friends/premium",

  "/philippines/family/standard",
  "/philippines/family/delux",
  "/philippines/family/premium",

  "/philippines/couple/standard",
  "/philippines/couple/delux",
  "/philippines/couple/premium",

  "/philippines/custom/standard",
  "/philippines/custom/delux",
  "/philippines/custom/premium",
];

// =====================================================
// USER UNPROTECTED ROUTES
// =====================================================

const userUnprotectedRoutesData = [
  // ===================================================
  // GENERAL
  // ===================================================

  {
    path: "/",
    element: <UserHome />,
  },

  {
    path: "/booking",
    element: <UserBooking />,
  },

  {
    path: "/about-us",
    element: <UserAbout />,
  },

  // ===================================================
  // BALI
  // ===================================================

  {
    path: "/bali",
    element: <UserBali />,
  },

  {
    path: "/bali/friends",
    element: <UserBaliFriends />,
  },

  {
    path: "/bali/family",
    element: <UserBaliFamily />,
  },

  {
    path: "/bali/couple",
    element: <UserBaliCouple />,
  },

  {
    path: "/bali/custom",
    element: <UserBaliCustom />,
  },

  // ===================================================
  // PHUKET
  // ===================================================

  {
    path: "/phuket",
    element: <UserPhuket />,
  },

  {
    path: "/phuket/friends",
    element: <UserPhuketFriends />,
  },

  {
    path: "/phuket/family",
    element: <UserPhuketFamily />,
  },

  {
    path: "/phuket/couple",
    element: <UserPhuketCouple />,
  },

  {
    path: "/phuket/custom",
    element: <UserPhuketCustom />,
  },

  // ===================================================
  // VIETNAM
  // ===================================================

  {
    path: "/vietnam",
    element: <UserVietnam />,
  },

  {
    path: "/vietnam/friends",
    element: <UserVietnamFriends />,
  },

  {
    path: "/vietnam/family",
    element: <UserVietnamFamily />,
  },

  {
    path: "/vietnam/couple",
    element: <UserVietnamCouple />,
  },

  {
    path: "/vietnam/custom",
    element: <UserVietnamCustom />,
  },

  // ===================================================
  // MALAYSIA
  // ===================================================

  {
    path: "/malaysia",
    element: <UserMalaysia />,
  },

  {
    path: "/malaysia/friends",
    element: <UserMalaysiaFriends />,
  },

  {
    path: "/malaysia/family",
    element: <UserMalaysiaFamily />,
  },

  {
    path: "/malaysia/couple",
    element: <UserMalaysiaCouple />,
  },

  {
    path: "/malaysia/custom",
    element: <UserMalaysiaCustom />,
  },

  // ===================================================
  // SINGAPORE
  // ===================================================

  {
    path: "/singapore",
    element: <UserSingapore />,
  },

  {
    path: "/singapore/friends",
    element: <UserSingaporeFriends />,
  },

  {
    path: "/singapore/family",
    element: <UserSingaporeFamily />,
  },

  {
    path: "/singapore/couple",
    element: <UserSingaporeCouple />,
  },

  {
    path: "/singapore/custom",
    element: <UserSingaporeCustom />,
  },

  // ===================================================
  // PHILIPPINES
  // ===================================================

  {
    path: "/philippines",
    element: <UserPhilippines />,
  },

  {
    path: "/philippines/friends",
    element: <UserPhilippinesFriends />,
  },

  {
    path: "/philippines/family",
    element: <UserPhilippinesFamily />,
  },

  {
    path: "/philippines/couple",
    element: <UserPhilippinesCouple />,
  },

  {
    path: "/philippines/custom",
    element: <UserPhilippinesCustom />,
  },

  // ===================================================
  // POLICIES
  // ===================================================

  {
    path: "/refund-policy",
    element: <UserRefundPolicy />,
  },

  {
    path: "/privacy-policy",
    element: <UserPrivacyPolicy />,
  },

  {
    path: "/terms-and-conditions",
    element: <UserTermsAndCondition />,
  },
];

// =====================================================
// USER PROTECTED ROUTES
// =====================================================

const userProtectedRoutesData = [
  {
    path: "/profile",
    element: <UserProfile />,
  },

  {
    path: "/my-trips",
    element: <UserMyTrips />,
  },
];

// =====================================================
// ADMIN AUTH ROUTES
// =====================================================

const adminAuthRoutesData = [
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  {
    path: "/admin/otp",
    element: <AdminOtp />,
  },
];

// =====================================================
// ADMIN PROTECTED ROUTES
// =====================================================

const adminProtectedRoutesData = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },

  {
    path: "/admin/users",
    element: <AdminUsers />,
  },

  {
    path: "/admin/trips",
    element: <AdminTrips />,
  },

  {
    path: "/admin/trip/:id",
    element: <AdminSingleTripDetails />,
  },

  {
    path: "/admin/custom",
    element: <AdminCustom />,
  },

  {
    path: "/admin/payment",
    element: <AdminPayment />,
  },

  {
    path: "/admin/queries",
    element: <AdminQueries />,
  },

  {
    path: "/admin/news-letter",
    element: <AdminNewsLetter />,
  },
];

// =====================================================
// APP
// =====================================================

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Routes>

        {/* ================================================= */}
        {/* USER AUTH ROUTES */}
        {/* ================================================= */}

        {userAuthRoutesData.map((route, index) => (
          <Route
            key={`user-auth-${index}`}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <UserAuthProtectedRoutes>
                  <AuthRouteLayout>
                    {route.element}
                  </AuthRouteLayout>
                </UserAuthProtectedRoutes>
              </Suspense>
            }
          />
        ))}

        {/* ================================================= */}
        {/* USER UNPROTECTED ROUTES */}
        {/* ================================================= */}

        {userUnprotectedRoutesData.map((route, index) => (
          <Route
            key={`user-public-${index}`}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <UserRouteLayout>
                  {route.element}
                </UserRouteLayout>
              </Suspense>
            }
          />
        ))}

        {/* ================================================= */}
        {/* PACKAGE ROUTES */}
        {/* ================================================= */}

        {packageRoutes.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <UserRouteLayout>
                  <PackagePage />
                </UserRouteLayout>
              </Suspense>
            }
          />
        ))}

        {/* ================================================= */}
        {/* USER PROTECTED ROUTES */}
        {/* ================================================= */}

        {userProtectedRoutesData.map((route, index) => (
          <Route
            key={`user-protected-${index}`}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <UserAccountProtectedRoutes>
                  <UserRouteLayout>
                    {route.element}
                  </UserRouteLayout>
                </UserAccountProtectedRoutes>
              </Suspense>
            }
          />
        ))}

        {/* ================================================= */}
        {/* ADMIN AUTH ROUTES */}
        {/* ================================================= */}

        {adminAuthRoutesData.map((route, index) => (
          <Route
            key={`admin-auth-${index}`}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                {window.innerWidth > 1000 ? (
                  <AdminAuthProtectedRoutes>
                    {route.element}
                  </AdminAuthProtectedRoutes>
                ) : (
                  <MobileScreen />
                )}
              </Suspense>
            }
          />
        ))}

        {/* ================================================= */}
        {/* ADMIN PROTECTED ROUTES */}
        {/* ================================================= */}

        {adminProtectedRoutesData.map((route, index) => (
          <Route
            key={`admin-protected-${index}`}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                {window.innerWidth > 1000 ? (
                  <AdminAccountProtectedRoutes>
                    <AdminRouteLayout>
                      {route.element}
                    </AdminRouteLayout>
                  </AdminAccountProtectedRoutes>
                ) : (
                  <MobileScreen />
                )}
              </Suspense>
            }
          />
        ))}

        {/* ================================================= */}
        {/* FALLBACK */}
        {/* ================================================= */}

        <Route
          path="*"
          element={<Fallback />}
        />

      </Routes>
    </>
  );
};

export default App;