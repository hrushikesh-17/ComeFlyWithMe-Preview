import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const SouthKorea = () => {
  return (
    <section className="south-korea">
      <LevelOnePage data={data} />
    </section>
  );
};

export default SouthKorea;