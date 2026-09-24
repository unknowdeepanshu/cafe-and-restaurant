import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="relative z-50 mx-16">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
