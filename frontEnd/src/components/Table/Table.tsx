
import "./Table.css";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props={
  columns:GridColDef[]
  rows:object[]
  slug:string
}

export default function Table(props:Props) {

const handelete=(id:number)=>{
 console.log("Id:" + id + " " + "foi deletado com sucesso!");
  
}

const actionColumn:GridColDef={
  field:"action",
  headerName:"Action",
  width:100,
  renderCell:(params)=>{
    return (
      <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
        <FaRegEdit  size={25} color="green"/>
        </Link>


<RiDeleteBinLine size={25} color="red" className="delete"
onClick={()=>handelete(params.row.id)}
/>
      </div>
    )
  }
}
  
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        // busca
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}
