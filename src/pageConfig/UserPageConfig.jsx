import { lazy } from "react";

// =====================================================
// AUTH ROUTES
// =====================================================

export const UserLogin = lazy(() =>
  import("@/pages/user/authRoutes/signIn/SignIn")
);

export const UserSignup = lazy(() =>
  import("@/pages/user/authRoutes/signUp/SignUp")
);

export const UserChangePassword = lazy(() =>
  import("@/pages/user/authRoutes/changePassword/ChangePassword")
);

export const UserForgetPassword = lazy(() =>
  import("@/pages/user/authRoutes/forgetPassword/ForgetPassword")
);

export const UserOtp = lazy(() =>
  import("@/pages/user/authRoutes/otp/Otp")
);

// =====================================================
// PROTECTED ROUTES
// =====================================================

export const UserProfile = lazy(() =>
  import("@/pages/user/protectedRoutes/profile/Profile")
);

export const UserMyTrips = lazy(() =>
  import("@/pages/user/protectedRoutes/myTrips/MyTrips")
);

// =====================================================
// GENERAL
// =====================================================

export const UserHome = lazy(() =>
  import("@/pages/user/unprotectedRoutes/home/Home")
);

export const UserAbout = lazy(() =>
  import("@/pages/user/unprotectedRoutes/about/About")
);

export const UserPrivacyPolicy = lazy(() =>
  import("@/pages/user/unprotectedRoutes/privacyPolicy/PrivacyPolicy")
);

export const UserRefundPolicy = lazy(() =>
  import("@/pages/user/unprotectedRoutes/refundPolicy/RefundPolicy")
);

export const UserTermsAndCondition = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/termsAndConditions/TermsAndConditions"
  )
);

// =====================================================
// BOOKING
// =====================================================

export const UserBooking = lazy(() =>
  import("@/pages/user/unprotectedRoutes/booking/Booking")
);

// =====================================================
// BALI
// =====================================================

export const UserBali = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/Bali")
);

export const UserBaliFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/friends/Friends")
);

export const UserBaliFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/family/Family")
);

export const UserBaliCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/couple/Couple")
);

export const UserBaliCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/custom/Custom")
);

// =====================================================
// PHUKET
// =====================================================

export const UserPhuket = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/Phuket")
);

export const UserPhuketFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/friends/Friends")
);

export const UserPhuketFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/family/Family")
);

export const UserPhuketCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/couple/Couple")
);

export const UserPhuketCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/custom/Custom")
);

// =====================================================
// VIETNAM
// =====================================================

export const UserVietnam = lazy(() =>
  import("@/pages/user/unprotectedRoutes/vietnam/Vietnam")
);

export const UserVietnamFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/vietnam/pages/friends/Friends")
);

export const UserVietnamFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/vietnam/pages/family/Family")
);

export const UserVietnamCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/vietnam/pages/couple/Couple")
);

export const UserVietnamCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/vietnam/pages/custom/Custom")
);

// =====================================================
// MALAYSIA
// =====================================================

export const UserMalaysia = lazy(() =>
  import("@/pages/user/unprotectedRoutes/malaysia/Malaysia")
);

export const UserMalaysiaFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/malaysia/pages/friends/Friends")
);

export const UserMalaysiaFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/malaysia/pages/family/Family")
);

export const UserMalaysiaCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/malaysia/pages/couple/Couple")
);

export const UserMalaysiaCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/malaysia/pages/custom/Custom")
);

// =====================================================
// SINGAPORE
// =====================================================

export const UserSingapore = lazy(() =>
  import("@/pages/user/unprotectedRoutes/singapore/Singapore")
);

export const UserSingaporeFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/singapore/pages/friends/Friends")
);

export const UserSingaporeFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/singapore/pages/family/Family")
);

export const UserSingaporeCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/singapore/pages/couple/Couple")
);

export const UserSingaporeCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/singapore/pages/custom/Custom")
);

// =====================================================
// PHILIPPINES
// =====================================================

export const UserPhilippines = lazy(() =>
  import("@/pages/user/unprotectedRoutes/philippines/Philippines")
);

export const UserPhilippinesFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/philippines/pages/friends/Friends")
);

export const UserPhilippinesFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/philippines/pages/family/Family")
);

export const UserPhilippinesCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/philippines/pages/couple/Couple")
);

export const UserPhilippinesCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/philippines/pages/custom/Custom")
);