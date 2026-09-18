// =====================================================
// SINGAPORE - FAMILY STANDARD PAGE
// =====================================================

import LevelTwoPage from "@/pages/user/components/levelTwo/LevelTwoPage";

import {
  data,
  activities,
} from "./config/config";

// =====================================================
// PAGE
// =====================================================

const Standard = () => {
  return (
    <LevelTwoPage
      data={data}
      activities={activities}
    />
  );
};

export default Standard;