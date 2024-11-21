import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/LeftAside";
import Navbar from "../components/Navbar";
import RightAside from "../components/RightAside";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
      <Header></Header>
      </header>
      <section className="container mx-auto">
        <LatestNews />
      </section>
      <nav className="container mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="container mx-auto mt-10 grid md:grid-cols-12 gap-8">
        <aside className="col-span-3">
            <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
            main content
        </section>
        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
