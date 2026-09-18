import LevelTwoPage from "@/components/user/pages/levelTwoPage/LevelTwoPage";

// Config
import { data } from "./config/config";

const Delux = () => {
  return (
    <section className="malaysia-custom-delux">
      <LevelTwoPage data={data} />
    </section>
  );
};

export default Delux;