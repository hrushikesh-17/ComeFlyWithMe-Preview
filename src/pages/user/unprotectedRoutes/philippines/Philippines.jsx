import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const Philippines = () => {
  return (
    <section className="philippines">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Philippines;