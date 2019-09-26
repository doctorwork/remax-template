import baseModel from "./base";
import businessModel from "./business";
import pageModels from "./pages";
// import model from every page

export default {
  models: [...baseModel, ...businessModel, ...pageModels],
  hooks: {}
};
