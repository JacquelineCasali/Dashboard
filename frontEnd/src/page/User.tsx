import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import Single from "../components/Single/Single";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import { singleUser } from "../db/data";

export default function User() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Usuário" />
      </HelmetProvider>
 
<div className="main">
<NavBar/>
<div className="contairner">
<div className="menuContaner">
  <Menu/>
</div>
<div className="contentContainer">
<Single {...singleUser}/>
</div>
</div> 
</div> 
   </>
   
    

  )
}
