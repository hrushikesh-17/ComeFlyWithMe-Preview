import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const Vietnam = () => {
  return (
    <section className="vietnam">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Vietnam;