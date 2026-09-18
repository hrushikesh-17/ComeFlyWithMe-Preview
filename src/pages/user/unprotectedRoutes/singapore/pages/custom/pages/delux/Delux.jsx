// =====================================================
// SINGAPORE - CUSTOM DELUX PAGE
// =====================================================

import LevelTwoPage from "@/pages/user/components/levelTwo/LevelTwoPage";

import {
  data,
  activities,
} from "./config/config";

// =====================================================
// PAGE
// =====================================================

const Delux = () => {
  return (
    <LevelTwoPage
      data={data}
      activities={activities}
    />
  );
};

export default Delux;