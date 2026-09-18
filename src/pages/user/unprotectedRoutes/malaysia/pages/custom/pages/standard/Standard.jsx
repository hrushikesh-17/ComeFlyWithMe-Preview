import LevelTwoPage from "@/components/user/pages/levelTwoPage/LevelTwoPage";

// Config
import { data } from "./config/config";

const Standard = () => {
  return (
    <section className="malaysia-custom-standard">
      <LevelTwoPage data={data} />
    </section>
  );
};

export default Standard;