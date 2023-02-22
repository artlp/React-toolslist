import "../Assets/Styles/App.scss";
import LibraryMain from "../components/Library/LibraryMain.jsx";
import Header from "../Layouts/header";
import Footer from "../Layouts/footer";
import BottomMenu from "../components/BottomMenu/BottomMenu";

function Library() {

  return (
    <div className="wrapper">
      <Header />
      <LibraryMain />
      <BottomMenu />
      <Footer />
    </div>
  );
}

export default Library;
