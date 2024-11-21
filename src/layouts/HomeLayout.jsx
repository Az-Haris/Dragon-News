import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

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
      <main className="container mx-auto mt-10 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
            Left aside
        </aside>
        <section className="col-span-6">
            main content
        </section>
        <aside className="col-span-3">
            right aside
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
