'use client'
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

const AllUsers = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 0.6 },
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 0.4,
      renderCell: (params: any) => {
        return (
          <>
            <Image
              src={params.row.avatar}
              alt=""
              width={40}
              height={40}
              className="w-[40px] mx-[5px] h-[40px] rounded-full"
            />
          </>
        );
      },
    },
    { field: "orders", headerName: "Orders", flex: 0.5 },
    { field: "created_at", headerName: "Joined At", flex: 0.5 },
    {
      field: "  ",
      headerName: "Email",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <a href={`mailto:${params.row.email}`}>
              <AiOutlineMail className="dark:text-white text-black" size={20} />
            </a>
          </>
        );
      },
    },
  ];

  const rows = [{
    id:"123456",
    name:"John Doe",
    email: "support@becodemy.com",
    avatar: "https://res.cloudinary.com/dkg6jv4l0/image/upload/v1688418919/avatars/sbtiws3u7astteqrvalt.jpg",
    orders: 5,
    created_at: "2022-01-01"
  }];

  return (
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
  );
};

export default AllUsers;
