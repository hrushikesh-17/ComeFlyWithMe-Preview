import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const Japan = () => {
  return (
    <section className="japan">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Japan;