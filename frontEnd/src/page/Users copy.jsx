import DataTable from "../components/dataTable/DataTable";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/NavBar/NavBar";

export default function Users() {
  return (
 
 
<div className="main">
<NavBar/>
<div className="menuContaner">
  <Menu/>
</div>


 
 
 <div className="users">
    <div className="info">
      <h1>Users</h1>
      <button>Adicionar Nova Usuário</button>
    </div>


<DataTable/>
    
    </div>

    <Footer/>
    </div>
  );
}
