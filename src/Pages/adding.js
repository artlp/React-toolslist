import "../Assets/Styles/App.scss";
import Header from "../Layouts/header";
import Footer from "../Layouts/footer";
import AddForm from "../components/AddForm/AddForm";
// import { Link } from "react-router-dom";
import useHeader from "../components/hooks/headerState";
import { useEffect } from "react";

function Adding() {
  const { setHeaderState } = useHeader();
  useEffect(() => {
    setHeaderState("basic");
    // first
  }, [setHeaderState]);

  return (
    <div className="wrapper">
      <Header />
      <AddForm />
      <Footer />
    </div>
  );
}

export default Adding;
