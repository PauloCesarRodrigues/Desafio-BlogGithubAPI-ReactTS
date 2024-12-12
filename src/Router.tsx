import { Home } from "./pages/Home";
import { Defaultlayout } from "./layout/DefaultTheme";
import { Routes, Route } from "react-router-dom";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}