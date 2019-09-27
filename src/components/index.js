import React from "react";
import { View } from "remax/wechat";

/**
 * 默认 export 为 class
 */
export default class index extends React.Component {
  render() {
    return <View />;
  }
}

// 组件容器
// 添加额外方法
export const Component = props => {
  return <View className="component">{props.children}</View>;
};

// 页面容器
export const Container = props => {
  return (
    <View className="page">
      {props.children}
      {/* 添加 Modal 之类的组件 */}
    </View>
  );
};

export { default as Header } from "./Header";
export { default as AppHeader } from "./AppHeader";
export { default as Modal } from "./Modal";
export { default as FormItem } from "./FormItem";
