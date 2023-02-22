import "../Assets/Styles/App.scss";
import DiscoveryMain from "../components/Discovery/DiscoveryMain.jsx";
import Header from "../Layouts/header";
import Footer from "../Layouts/footer";
import BottomMenu from "../components/BottomMenu/BottomMenu";



function Main() {
  return (
    <div className="wrapper">
      <Header />
      <DiscoveryMain />
      <BottomMenu />
      <Footer />
    </div>
  );
}

export default Main;
