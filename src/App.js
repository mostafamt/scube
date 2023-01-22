import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { pages, paths } from "./constants";
import Scube from "./Pages/Scube";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Scube />
        {/* <Routes>
          {pages.map((page, idx) => (
            <Route key="idx" path={paths[idx]} element={page}></Route>
          ))}
        </Routes> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
