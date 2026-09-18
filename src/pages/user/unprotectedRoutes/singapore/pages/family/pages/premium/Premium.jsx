// =====================================================
// SINGAPORE - FAMILY PREMIUM PAGE
// =====================================================

import LevelTwoPage from "@/pages/user/components/levelTwo/LevelTwoPage";

import {
  data,
  activities,
} from "./config/config";

// =====================================================
// PAGE
// =====================================================

const Premium = () => {
  return (
    <LevelTwoPage
      data={data}
      activities={activities}
    />
  );
};

export default Premium;