"use client";

import React, { useState } from "react";
import Forms from "@/components/ui/Forms";

const Orders = () => {
  const steps = ["Information", "Housing", "Resquest"];
  const [CurrentStep, setCurrentStep] = useState(1);
  return (
    <div className="h-screen w-full bg-[--background-primary] text-white">
      <Forms name="Orders" />
    </div>
  );
};

export default Orders;
