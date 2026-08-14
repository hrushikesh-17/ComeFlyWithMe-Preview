import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const Malaysia = () => {
  return (
    <section className="malaysia">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Malaysia;