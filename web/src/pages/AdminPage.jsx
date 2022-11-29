import { useState } from "react";
import Page from "../components/AdminPages/AdminPage";
import NavBar from "../components/AdminPages/NavBar";

export default function AdminPage() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
  <div>
  <NavBar/>
  <Page />
  </div>
  );
}
