import React, { useContext } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { QuizTopicContext } from "../../layout/Main";

const Statistics = () => {
  const loaderData = useContext(QuizTopicContext);
  const data = loaderData.data;

  return (
    <div className="mx-auto">
      <h1 className="text-2xl m-10 text-cyan-600">
        Total Number of Questions BarChart
      </h1>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={50}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 100,
            left: 100,
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
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
