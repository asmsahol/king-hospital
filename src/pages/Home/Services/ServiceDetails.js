/** @format */

import React from "react";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <div>
      <h2>Service Detail: {serviceId}</h2>
    </div>
  );
};

export default ServiceDetail;
