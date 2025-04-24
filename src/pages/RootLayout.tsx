import { Outlet } from "react-router-dom";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-1 mt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
