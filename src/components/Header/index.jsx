import React from "react";
import { View } from "remax";

const PLATFORM = process.env.PLATFORM;

const HeaderButton = props => {
  const BackButton = (
    <Text
      className="navigate-back-icon iconfont"
      onClick={props.goBack}
      style={{
        fontSize: "20px",
        lineHeight: "30px"
      }}
    >
      &#xe602;
    </Text>
  );
  const HomeButton = (
    <Text
      className="navigate-back-icon iconfont"
      onClick={props.backHome}
      style={{
        fontSize: "20px",
        lineHeight: "30px"
      }}
    >
      &#xe601;
    </Text>
  );
  const Divider = <View className="division" style={{ height: "18px" }} />;

  const comps = [];
  return (
    <View className="navigate-content" style={{ height: "44px" }}>
      <Label
        className="navigate-back"
        style={{
          top: "5px",
          color: backTextColor,
          border: "1rpx solid #EAEAEA",
          width: "85px",
          height: "30px",
          borderRadius: "30px"
        }}
      >
        {comps}
      </Label>
    </View>
  );
};

export default props => {
  return (
    <View className="navigate-contaner" style={{ height: navH }}>
      <View
        className="fixed-container"
        ref={this.containerRef}
        style={fixStyle}
      >
        {PLATFORM === "wechat" ? <HeaderButton /> : null}

        <Text className="navigate-title" style={{ color }}>
          {title}
        </Text>
      </View>
      <View>{this.props.children}</View>
    </View>
  );
};
