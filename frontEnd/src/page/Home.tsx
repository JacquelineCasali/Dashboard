import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import Outlet from "../components/Outlet/Outlet";
import Footer from "../components/Footer/Footer";



export default function Home() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Dashboard" />
      </HelmetProvider>
 
<div className="main">
<NavBar/>


<div className="contairner">
<div className="menuContaner">
  <Menu/>
</div>
<div className="contentContainer">
<Outlet/>
</div>
</div>
<Footer/>
</div> 
   </>
   
    

  )
}
