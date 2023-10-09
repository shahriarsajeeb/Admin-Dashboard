import { styles } from "@/utils/styles";
import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const analyticsData = [
  {
    name: "Page A",
    Count: 4000,
  },
  {
    name: "Page B",
    Count: 3000,
  },
  {
    name: "Page C",
    Count: 5000,
  },
  {
    name: "Page D",
    Count: 1000,
  },
  {
    name: "Page E",
    Count: 4000,
  },
  {
    name: "Page F",
    Count: 800,
  },
  {
    name: "Page G",
    Count: 200,
  },
];

type Props = {
  isDashboard?: boolean;
};

export default function OrdersAnalytics({ isDashboard }: Props) {
  analyticsData.forEach((item: any) => {
    analyticsData.push({ name: item.name, Count: item.count });
  });

  return (
    <>
      {" "}
      <div className={isDashboard ? "h-[30vh]" : "h-screen"}>
        <div className={isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]"}>
          <h1
            className={`${styles.title} ${
              isDashboard && "!text-[20px]"
            } px-5 !text-start`}
          >
            Orders Analytics
          </h1>
        </div>
        <div
          className={`w-full ${
            !isDashboard ? "h-[90%]" : "h-full"
          } flex items-center justify-center`}
        >
          <ResponsiveContainer
            width={"100%"}
            height={"100%"}
          >
            <LineChart
              width={500}
              height={300}
              data={analyticsData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Count" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
