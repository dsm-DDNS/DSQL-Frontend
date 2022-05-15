import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/common/header";
import PhotoAlbum from "../components/page/album";
import MainPage from "../components/page/mainPage";
import ProjectList from "../components/page/projectList";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/photo" element={<PhotoAlbum />} />
          <Route path="/list" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
