import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function Defaultlayout(){
  return(
    <>
      <Header />
      <Outlet/>
    </>
  )
}