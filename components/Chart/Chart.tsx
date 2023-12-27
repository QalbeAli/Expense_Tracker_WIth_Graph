"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChartComponentType } from "@/types/componentsProps";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const Chart = ({ expenses }: ChartComponentType) => {
  return (
    <div className="w-full">
      <BarChart width={600} height={400} data={expenses}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;
