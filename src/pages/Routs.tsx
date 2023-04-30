import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import PageList from "./PageList/PageList";

export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/PageList" element={<PageList />} />
    </Routes>
  );
}
