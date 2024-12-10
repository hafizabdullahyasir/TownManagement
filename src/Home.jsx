import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen w-full"
      style={{ backgroundImage: "url('/images/main.png')" }}
    >
      <Navbar />
      <Searchbar />
      <Hero />
    </div>
  );
};

export default Home;
