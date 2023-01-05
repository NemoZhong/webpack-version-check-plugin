### 1、简介（Introduction）

webpack 的 plugin 插件，每次打包记录版本号，暴露出版本号及检查版本一致与否

### 2、安装（Install）

```bash
npm i @wyny/set-version-plugin -S
```

### 3、用法（Usage）

```js
import { VersionBuildPlugin,VERSION } from '@wyny/set-version-plugin';
const path = require('path');
// ...
// webpack.config
if (process.env.NODE_ENV === 'production') {
  config.plugin('VersionPlugin').use(
    new VersionBuildPlugin({
      VERSION: '"' + VERSION + '"',
      versionDirectory: 'static',
      assetsPath: path.resolve(__dirname, '../../dist'),
    }),
  );
}
// webpack.DefinePlugin
define { VERSION }
```

```js
import { VersionUpdateCheck } from '@wyny/set-version-plugin';
// ...
// 合适的时候去调用，路由跳转时
if (process.env.NODE_ENV === 'production') {
  VersionUpdateCheck(VERSION)
    .then((res) => {
      if (res === true) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log('err', err);
    });
}
```

### 4、参考资料

<https://juejin.cn/post/6844904192398606343>
