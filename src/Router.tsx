import { Home } from "./pages/Home";
import { Defaultlayout } from "./layout/DefaultTheme";
import { Routes, Route } from "react-router-dom";
import { IssuePage } from "./pages/IssuePage";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:issueId" element={<IssuePage />} />
      </Route>
    </Routes>
  )
}