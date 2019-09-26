import * as React from "react";
import { View } from "remax/base";
import Header from "../Header";
import Modal from "../Modal";
import { connect } from "@remax/dva";

function AppHeader() {
  return (
    <View>
      <Header />
      <Modal></Modal>
    </View>
  );
}

export default connect()(AppHeader);
