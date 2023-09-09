import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};
