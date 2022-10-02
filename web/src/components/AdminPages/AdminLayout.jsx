import NavBar from "./NavBar";

const AdmLayout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default AdmLayout;
