import React from 'react'
import "./Casdastro.css";
import { GridColDef } from '@mui/x-data-grid';


type Props = {
  slug: string;
  columns: GridColDef[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function Cadastro(props: Props) {
   const handleSubmit=(e:any)=>{
    e.preventDefault();
    // navigate(`/users`);
   props.setOpenModal(false)
    console.log("Usuário cadastrado com sucesso!");
     
   }
 
  return (
    <>

      {/* <h1 >Adicionar novo Usuário</h1> */}
      <h1 className='h1cadastro'>Add New {props.slug}</h1>
            
        <form onSubmit={handleSubmit}>
          {/* filtrar para nao pegar o id e a img */}
           {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => ( 
       <div className="itemCadastro">
       <label>{column.headerName}</label>
       <input type={column.type} placeholder={column.field} />
       </div>
         
      
             ))}
              <button className='  button'>Cadastrar</button>
        </form>
   
    </>
  )
}
