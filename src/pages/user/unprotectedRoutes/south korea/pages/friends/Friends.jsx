import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";
import { data } from "./config/config";

const Friends = () => {
  return (
    <section className="south-korea-friends">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Friends;