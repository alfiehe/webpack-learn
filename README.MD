# Webpack Learn

- `--save-dev` 简写`-D` 安装在开发环境
- `--save` 简写 `-S` 安装在生产环境

## 三件套
- webpack
- webpack-cli
- webpack-dev-server
```
tnpm i -D webpack webpack-cli webpack-dev-server
```

---

## 处理JS 六件套
> ES6 ES7 ES8 装饰器
- babel-loader
- babel-core
- babel-preset-env
- babel-plugin-transform-runtime
- babel-plugin-transform-decorators
- babel-plugin-transform-decorators-legacy
```
tnpm i -D babel-loader babel-core babel-preset-env babel-plugin-transform-runtime babel-plugin-transform-decorators babel-plugin-transform-decorators-legacy
```

## 处理样式 四件套
> sass -> css > style
- sass-loader
- node-sass
- css-loader
- style-loader

```
tnpm i -D sass-loader node-sass css-loader style-loader
```

## 处理模板和HTML
- ejs-loader
- html-webpack-plugin
```
tnpm i -D ejs-loader html-webpack-plugin
```