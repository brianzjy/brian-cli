### commander.js 的基本用法

1. 使用 commander.js 目标实现以下命令

- -v, --version output the version number
- -i, --init init something
- -g, --generate generate something
- -r, --remove remove something
- -h, --help output usage information

示例：

```
{
  "walleExtends": {
    "ui":{
      "cnBackTop": "@alicd/cn-backtop@0.0.5", // react 组件
      "cnTab": "@alicd/cn-tab@0.0.4", // react 组件
      "localModule": "~./components/test/src",  // 引入本地组件, 本地组件使用~开头
      "gitlabModule": "http://github.com/component.git"  // github 组件
    },
    "plugins": { // 插件可以通过 walle.pluginName 调用
      "wmsutitls": "@alicd/walleUtil"
    },
    "theme": ["@alicd/walle-th示例： 
```
{
  "walleExtends": {
    "ui":{
      "cnBackTop": "@alicd/cn-backtop@0.0.5", // react 组件
      "cnTab": "@alicd/cn-tab@0.0.4", // react 组件
      "localModule": "~./components/test/src",  // 引入本地组件, 本地组件使用~开头
      "gitlabModule": "http://github.com/component.git"  // github 组件
    },
    "plugins": { // 插件可以通过 walle.pluginName 调用
      "wmsutitls": "@alicd/walleUtil"
    },
    "theme": ["@alicd/walle-theme"] // 可以在 https://fusion.design 进行主题可视化配置，具体可以钉钉联系 @恺里 
  }
}
```eme"] // 可以在 https://fusion.design 进行主题可视化配置，具体可以钉钉联系 @恺里
  }
}
```

### 开发

1. 执行 `npm install` 安装必须的依赖。
2. 可选：在 `src/start.js` 添加 walle 的初始化配置，如 routerMap, layoutConfig 等 (具体参见 walle 文档)。
3. 可选：在 `config.js` 添加配置需要用的组件、插件、主题，通过执行 `npm run walle-build` 打包配置（ 这个操作会生成 walle-extends.js/css 组件和主题包）。

示例：

```
{
  "walleExtends": {
    "ui":{
      "cnBackTop": "@alicd/cn-backtop@0.0.5", // react 组件
      "cnTab": "@alicd/cn-tab@0.0.4", // react 组件
      "localModule": "~./components/test/src",  // 引入本地组件, 本地组件使用~开头
      "gitlabModule": "http://github.com/component.git"  // github 组件
    },
    "plugins": { // 插件可以通过 walle.pluginName 调用
      "wmsutitls": "@alicd/walleUtil"
    },
    "theme": ["@alicd/walle-theme"] // 可以在 https://fusion.design 进行主题可视化配置，具体可以钉钉联系 @恺里
  }
}
```

4. 打包组件和主题库

```
npm run walle-build
```

该命令会将组件、插件、主题打包到 `walle-extends.js` 文件，`css` 抽取到 `walle-extends.css` 文件。

5. 开发阶段执行

```
npm run dev
```

会运行 gulpfile。 将编译 walle 源文件到 build 目录，并启动监听和一个简易的静态 server.

6. 开发完成后执行

```
npm run build
```

会压缩文件到 build 目录，可以通过 cdn 平台发布。

### 更换主题

可以在 https://fusion.design 进行主题可视化配置，具体可以答疑群钉钉联系 @恺里

#### wallerc 文件配置

- "outputPath" : "./build" 打包生成文件的目录
