import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

// Config
import { data } from "./config/config";

const Friends = () => {
  return (
    <section className="friends">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Friends;