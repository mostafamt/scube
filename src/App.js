import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { pages, paths } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        {pages.map((page, idx) => (
          <Route key="idx" path={paths[idx]} element={page}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
