import React from "react";
import { Completed } from "./styled";

export default ({ order }) => (
  <Completed>
    <div>
      <label>{order.shipping.name}</label>
    </div>
    <div>
      <label>{order.email}</label>
    </div>
    <div>
      <label>{order.shipping.address.line1}</label>
      <label>{order.shipping.address.line2}</label>
      <label>{order.shipping.address.state}</label>
      <label>{order.shipping.address.City}</label>
      <label>{order.shipping.address.postal_code}</label>
    </div>
  </Completed>
);
