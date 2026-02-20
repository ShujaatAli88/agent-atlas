import Navbar from "../Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", backgroundColor: "#0f172a" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: "30px" }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;