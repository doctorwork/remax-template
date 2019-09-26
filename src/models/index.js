import baseModel from "./base";
import businessModel from "./business";

// import model from every page

export default {
  models: [...baseModel, ...businessModel],
  hooks: {}
};
