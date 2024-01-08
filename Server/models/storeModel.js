const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  bussinessPartnerType: {
    type: String,
    enum: ["Retailer", "Supplier"],
  },

  linkStores: {
    type: String,
  },
});

const StoreModel = mongoose.model("Store", storeSchema);

module.exports = StoreModel;
