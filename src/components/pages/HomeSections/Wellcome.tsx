import scss from "./Wellcome.module.scss";

const Wellcome = () => {
  return (
    <section className={scss.Wellcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>Wellcome</h1>
        </div>
      </div>
    </section>
  );
};

export default Wellcome;
