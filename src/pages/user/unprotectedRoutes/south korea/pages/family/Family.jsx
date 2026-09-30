import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";
import { data } from "./config/config";

const Family = () => {
  return (
    <section className="south-korea-family">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Family;