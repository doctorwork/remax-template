# Remax 应用


## 运行项目

```bash
$ npm run dev
```

## 项目结构

现在我们来看一下 Remax 应用的结构：

```
my-app/
┳ package.json
┣ dist/
┣ node_modules/
┣ src/
┗━┓ app.js
  ┣ app.css
  ┣ app.config.js
  ┣ pages/
  ┗━┓ index/
    ┗━┓
      ┣ index.js
      ┣ index.module.css
      ┣ index.config.js
```

`dist` 为打包编译后的文件目录。
`src` 为源文件目录
`app.js` 即小程序 App 方法，可以在 class 内定义对应的属性
`pages` 存放项目页面

`pages/index/index.js` 页面文件，对应小程序 Page 方法
```jsx
import * as React from 'react';
import { View, Text } from 'remax/wechat';
import './index.module.css';

export default () => {
  return (
    <View>
      <Text>pages/index/index</Text>
    </View>
  );
};
```

_默认导出的的 React 组件就是当前的页面，

[详细文档](https://remaxjs.org/guide)
