"use client";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Modal, Select } from "@mui/material";
import { BsPencil } from "react-icons/bs";
import { useState } from "react";
import { styles } from "@/utils/styles";

type PromptsDataTypes = {
  id: string;
  name: string;
  price: string;
  rating: number;
  purchased?: number;
  orders?: any[];
};

const AllPrompts = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompts Title", flex: 0.8 },
    { field: "price", headerName: "Prompts Price", flex: 0.5 },
    { field: "rating", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <div className="w-full flex items-center">
            <span>Pending</span>
            <BsPencil
              className="text-sm cursor-pointer ml-2"
              onClick={() => setOpen(true)}
            />
          </div>
        );
      },
    },
  ];

  const rows: Array<PromptsDataTypes> = [
    {
      id: "123",
      name: "Prompt 1",
      price: "100",
      rating: 5,
      purchased: 0,
    },
  ];

  return (
    <>
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="90vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              outline: "none",
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              color: "#fff",
            },
            "& .MuiDataGrid-sortIcon": {
              color: "#fff",
            },
            "& .MuiDataGrid-row": {
              color: "#fff",
              borderBottom: "1px solid #ffffff30!important",
            },
            "& .MuiTablePagination-root": {
              color: "#fff",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none!important",
            },
            "& .name-column--cell": {
              color: "#fff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#3e4396",
              borderBottom: "none",
              color: "#fff",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#1F2A40",
            },
            "& .MuiDataGrid-footerContainer": {
              color: "dark",
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": {
              color: `#b7ebde !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `#fff !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Box>

      {open && (
        <Modal
          open
          onClose={() => setOpen(!open)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="w-full flex fixed top-0 left-0 h-screen z-[999999999999]"
        >
          <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-slate-900 rounded-[8px] shadow p-4 outline-none">
            <h1 className="text-2xl font-bold text-center text-white">
              Update Status
            </h1>
            <select
              name=""
              id=""
              className={`${styles.input} !mt-6 bg-transparent border rounded p-2`}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Live">Live</option>
              <option value="Declined">Declined</option>
            </select>
            <br />
            <button className={`${styles.button} bg-[#3f4cda] my-6 !h-[35px]`}>
              Submit
            </button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default AllPrompts;
