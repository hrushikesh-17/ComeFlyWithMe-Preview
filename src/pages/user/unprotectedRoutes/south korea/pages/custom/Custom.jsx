import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";
import { data } from "./config/config";

const Custom = () => {
  return (
    <section className="south-korea-custom">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Custom;