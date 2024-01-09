import React from "react";

import ShippingOrderTracking from "../../../../components/settings/shipping/ShippingOrderTracking";
import ChooseShippingMethod from "../../../../components/settings/shipping/ChooseShippingMethod";

const Shipping = () => {
  return (
    <div className="">
      <ChooseShippingMethod />
      <ShippingOrderTracking />
    </div>
    // </div>
  );
};

export default Shipping;
