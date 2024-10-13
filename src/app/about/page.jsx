import About from "../components/About";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <>
      <div className="pt-12">
        <PageHeader pageTitle="About Page" currentPage="About" />
      </div>

      <About />
    </>
  );
};

export default AboutPage;
