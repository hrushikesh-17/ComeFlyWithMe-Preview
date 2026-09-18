import LevelTwoPage from "@/components/user/pages/levelTwoPage/LevelTwoPage";

// Config
import { data } from "./config/config";

const Standard = () => {
  return (
    <section className="malaysia-couple-standard">
      <LevelTwoPage data={data} />
    </section>
  );
};

export default Standard;