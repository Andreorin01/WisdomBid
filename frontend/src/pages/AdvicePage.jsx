import React, { useState } from "react";
import AdviceForm from "../components/AdviceForm";

const AdvicePage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Post Your Question</h2>
      <AdviceForm />
    </div>
  );
};

export default AdvicePage;