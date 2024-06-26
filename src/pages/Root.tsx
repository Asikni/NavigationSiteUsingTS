
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="container mx-auto px-20">
      <Header />
      <Outlet />  {/* Outlet automatically determines on which page we are on...here details or home or search page...*/}
    </div>
  );
}
