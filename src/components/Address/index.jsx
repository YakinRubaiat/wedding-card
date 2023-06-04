import React from "react";
import "./Address.scss";
import { addressData } from "../../data/addressData";

const Address = () => {
  return (
    <div className='address'>
      <p>
        {addressData.line1}, {addressData.line2}
      </p>
      <p>
        {addressData.city}, {addressData.state}, {addressData.zip}
      </p>
      <p>{addressData.country}</p>
    </div>
  );
};

export default Address;
