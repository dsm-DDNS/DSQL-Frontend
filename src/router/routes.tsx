import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../components/admin";
import Header from "../components/common/header";
import PhotoAlbum from "../components/page/album";
import Login from "../components/page/auth/login";
import SignUp from "../components/page/auth/signup";
import MainPage from "../components/page/mainPage";
import NewsPaper from "../components/page/newspaper";
import ProjectList from "../components/page/projectList";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/photo" element={<PhotoAlbum />} /> */}
          {/* <Route path="/list" element={<ProjectList />} />
          <Route path="/paper" element={<NewsPaper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
