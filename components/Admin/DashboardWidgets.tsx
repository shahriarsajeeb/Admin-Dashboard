"use client";
import React, { FC, useState } from "react";
import { BiBorderLeft } from "react-icons/bi";
import { PiUsersFourLight } from "react-icons/pi";
import { Box, CircularProgress } from "@mui/material";
import AllInvoices from "./AllInvoices";
import UserAnalytics from "@/components/Admin/UserAnalytics";
import OrdersAnalytics from "@/components/Admin/OrdersAnalytics";

type Props = {
  open?: boolean;
  value?: number;
};

const CircularProgressWithLabel: FC<Props> = ({ open, value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        color={value && value > 99 ? "info" : "error"}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const DashboardWidgets: FC<Props> = ({ open }) => {
  const [ordersComparePercentage, setOrdersComparePercentage] = useState<any>();
  const [userComparePercentage, setuserComparePercentage] = useState<any>();

  return (
    <>
      <div className="mt-[5px] min-h-screen">
        <div className="grid grid-cols-[75%,25%]">
          <div className="p-8">
            <UserAnalytics isDashboard={true} />
          </div>

          <div className="pt-[80px] pr-8">
            <div className="w-full bg-[#111C43] rounded-sm shadow">
              <div className="flex items-center p-5 justify-between">
                <div className="">
                  <BiBorderLeft className="text-[#45CBA0] text-[30px]" />
                  <h5 className="pt-2 font-Poppins text-[#fff] text-[20px]">
                    10
                  </h5>
                  <h5 className="py-2 font-Poppins text-[#45CBA0] text-[17px] font-[400]">
                    Sales Obtained
                  </h5>
                </div>
                <div>
                  <CircularProgressWithLabel value={100} open={open} />
                  <h5 className="text-center text-[15px] pt-4">100%</h5>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#111C43] rounded-sm shadow my-8">
              <div className="flex items-center p-5 justify-between">
                <div className="">
                  <PiUsersFourLight className="text-[#45CBA0] text-[30px]" />
                  <h5 className="pt-2 font-Poppins text-[#fff]  text-[20px]">
                    235
                  </h5>
                  <h5 className="py-2 font-Poppins text-[#45CBA0] text-[17px] font-[400]">
                    New Users
                  </h5>
                </div>
                <div>
                  <CircularProgressWithLabel value={100} open={open} />
                  <h5 className="text-center text-[15px] pt-4">100%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[65%,34%] mt-[-20px]">
          <div className="bg-[#111c43] w-[94%] mt-[30px] h-[43vh] shadow-sm m-auto">
            <OrdersAnalytics isDashboard={true} />
          </div>
          <div className="p-3">
            <h5 className="text-[#fff] text-[20px] font-[400] font-Poppins pb-3">
              Recent Transactions
            </h5>
            <AllInvoices isDashboard={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardWidgets;
