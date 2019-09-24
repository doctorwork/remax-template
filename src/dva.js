import dva from '@remax/dva';
// import createLoading from 'dva-loading';
import config from './models';

const {models, ...options} = config;

let dvaApp = dva({
  initialState: {},
  ...options
});

models.forEach(dvaApp.model);

export default dvaApp;
