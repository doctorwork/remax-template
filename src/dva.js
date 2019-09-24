import dva from '@remax/dva';
// import createLoading from 'dva-loading';
import models from './models';

let dvaApp = dva({
  initialState: {},
});

models.forEach(dvaApp.model);

export default dvaApp;
