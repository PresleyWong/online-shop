import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="max-w-screen-xl mx-auto">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
