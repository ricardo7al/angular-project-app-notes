const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const UserEschema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UserEschema.methods.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserEschema.methods.matchPass = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserEschema);
