import NavBar from "./AdminLayout";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
