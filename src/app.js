/***/
import React, { Component } from 'react';
import { View } from 'remax/base';
import dvaApp from './dva';

export default dvaApp.start(({ children }) => {
  return <View className="app">{children}</View>;
});
