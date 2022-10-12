import React, { useContext } from "react";

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//
// } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { QuizTopicContext } from "../../layout/Main";

const Statistics = () => {
  const loaderData = useContext(QuizTopicContext);
  const data = loaderData.data;
  // const { name, total } = data;
  // console.log(data);

  return (
    <div className="mx-auto">
      <h1 className="text-2xl m-10">Total Number of Questions BarChart</h1>

      <BarChart
        width={500}
        height={300}
        data={data}
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
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Statistics;
