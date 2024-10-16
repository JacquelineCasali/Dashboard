import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina


import { IoIosAdd } from "react-icons/io";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import Cadastro from "../components/Cadastro/Cadastro";
import Table from "../components/Table/Table";

import { products } from "../db/data";
import Footer from "../components/Footer/Footer";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  //adicionando nova coluna
  {
    field: "img",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      return (
        <img
          className="avatar"
          src={params.row.img || "../../../public/noavatar.png"}
          alt=""
        />
      );
    },
  },

  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 130,
  },
  {
    field: "color",
    headerName: "Color",
    width: 130,
    type: "string",
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 90,
    type: "boolean",
  },
];

const Products = () => {
  //modal
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <HelmetProvider>
        <Helmet title="Usuários" />
      </HelmetProvider>
      <div className="main">
        <NavBar />
        <div className="contairner">
          <div className="menuContaner">
            <Menu />
          </div>
          <div className="contentContainer">
            <h1 className="info">Produtos</h1>

            <button
              className="buttonadicionar"
              onClick={() => setOpenModal(true)}
            >
              <IoIosAdd size={25} />
              Novo Produto
            </button>
            {openModal && <Cadastro slug="users" columns={columns} setOpenModal={setOpenModal}/>}

            <Table slug="products" columns={columns} rows={products} />

       
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Products;
