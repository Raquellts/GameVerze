//CSS
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
//Componentes
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Navs/Footer";
import NotfoundInfo from "../components/Banners/404info";

export default function notfound() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <NotfoundInfo />
        <Footer />
      </div>
    </>
  );
}
