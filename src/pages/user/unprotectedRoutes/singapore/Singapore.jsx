import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const Singapore = () => {
  return (
    <section className="singapore">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Singapore;