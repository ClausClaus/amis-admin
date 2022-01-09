# amis 数据管理

### 获取URL参数

[URL参数获取]([https://baidu.gitee.io/amis/zh-CN/docs/concepts/datascope-and-datachain?word=test#url-%E5%8F%82%E6%95%B0](URL参数获取))

### 设置URL参数

- 表单提交时配置页面跳转的redirect属性，值为字符串，可通过${xxx}配置路由参数
  - example: ` redirect:'/admin/form/basic/advanced?test=${num}'`

### 状态管理方案

​    "mobx": "^4.5.0",

​    "mobx-react": "^6.1.4",

​    "mobx-state-tree": "^3.17.3",



### 获取页面数据

方法名称：`getComponentByName(name)`用于获取渲染出来的组件

相关链接：

- https://baidu.github.io/amis/zh-CN/docs/start/getting-started search key: getComponentByName
- [作用域之外, 有办法修改data的值吗? #872 ](https://github.com/baidu/amis/issues/872)
- [页面间通信](https://baidu.gitee.io/amis/zh-CN/docs/extend/custom-react#%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1)

### amis内部状态管理方法

- props.updateData()
- props.setValues()

> 内部调用的是同一个函数，只是名称不同而已

<img width="1219" alt="截屏2022-01-06 16 29 59" src="https://user-images.githubusercontent.com/21154310/148353136-1ea59aed-6cfa-4aed-b9d6-47b96a8d0e47.png">

- props.getPristineValueByName('xxx') // 获取原始值
- props.store.data // 获取页面所有data


### history warning

https://github.com/remix-run/history/issues/680

https://stackoverflow.com/questions/55466802/react-requirehistory-createbrowserhistory-instead-of-requirehistory-crea







