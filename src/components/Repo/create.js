import React from "react";
import { View, Input } from "remax/base";
import { connect } from "@remax/dva";

export default connect()(props => {
  const { dispatch } = props;
  console.log("dispatch");
  return (
    <View>
      <Input />
      <Input />
    </View>
  );
});
