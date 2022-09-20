const mongoose = require("mongoose");

const toureSchema = mongoose.Schema({
  packageName: {
    type: String,
    required: [true, "Please provide a packageName for toure"],
    trim: true,
    unique: true,
    minLength: [3, "packageName mast be 3 characters"],
    maxLength: [100, "packageName is too larges"],
  },
  packageType: {
    type: String,
    required: true,
    enum: {
      values: ["premium-package", "business-class", "normal-package"],
      massage: "packageType value can't be {VALUE},must be kpremium-package/business-class/normal-package",
    }
  },
  packageLocation: {
    type: String,
    required: true,
    minLength: [3, "packageName mast be 3 characters"],
    maxLength: [100, "packageName is too larges"]
  },
  packageDescription: {
    type: String,
    required: true
  },
  packagePrice: {
    type: Number,
    required: true,
    min: [0, "packagePrice can't be negative"],
  }
})
//model
const toureManagement = mongoose.model('Tours', toureSchema)

module.exports = toureManagement;