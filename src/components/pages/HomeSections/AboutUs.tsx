import Loader from "@/ui/Loader/Loader";
import scss from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <h4>AboutUs</h4>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
