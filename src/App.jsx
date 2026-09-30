import { lazy, Suspense } from "react";

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
// JAPAN
// =====================================================

const Japan = lazy(() =>
  import("./pages/user/unprotectedRoutes/japan/Japan")
);

// =====================================================
// SOUTH KOREA
// =====================================================

const SouthKorea = lazy(() =>
  import("./pages/user/unprotectedRoutes/south korea/South Korea")
);

const Friends = lazy(() =>
  import("./pages/user/unprotectedRoutes/south korea/pages/friends/Friends")
);

const Family = lazy(() =>
  import("./pages/user/unprotectedRoutes/south korea/pages/family/Family")
);

const Couple = lazy(() =>
  import("./pages/user/unprotectedRoutes/south korea/pages/couple/Couple")
);

const Custom = lazy(() =>
  import("./pages/user/unprotectedRoutes/south korea/pages/custom/Custom")
);

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
  // JAPAN
  // ===================================================

  {
    path: "/japan",
    element: <Japan />,
  },

  // ===================================================
  // SOUTH KOREA
  // ===================================================

  {
    path: "/south-korea",
    element: <SouthKorea />,
  },

  {
    path: "/south-korea/friends",
    element: <Friends />,
  },

  {
    path: "/south-korea/family",
    element: <Family />,
  },

  {
    path: "/south-korea/couple",
    element: <Couple />,
  },

  {
    path: "/south-korea/custom",
    element: <Custom />,
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