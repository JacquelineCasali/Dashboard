import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer"
import "./Users.css"
import DataTable from "../../components/dataTable/DataTable";
import { IoIosAdd } from "react-icons/io";

import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import { userRows } from "../../db/data";

const columns:GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  //adicionando nova coluna
  {
    field: "img",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      return (
        <img
        className="avatar"
        src={params.row.img || "../../../assets/noavatar.png"} alt="" />
      );
    },
  },
 
  {
    field: "firstName",
    type:"string",
    headerName: "First name",
    width: 130,

  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    type:"string",
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 90,
    type: "boolean",
   
  },

];

export default function Users() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Usuários" />
      </HelmetProvider>
 
<div className="main">
<NavBar/>


<div className="contairner">
<div className="menuContaner">
  <Menu/>
</div>

 <div className="contentContainer">
 <h1 className="info">Users</h1>
 <button className="buttonadicionar">
 <IoIosAdd size={25}/>
  Novo Usuário</button>

<DataTable 
slug="users"
columns={columns} rows={userRows} />
</div>

</div>
<Footer/>
</div> 
   </>
   
    

  )
}
