import schema2component from '../../../utils/schema2component'

const schema = {
  type: 'page',
  name: 'basic',
  title: '页面跳转并携带url参数',
  subTitle:
    '表单提交后可使用redirect属性配置提交后的页面跳转地址，值为字符串，可通过${xxx}配置路由参数',
  body: [
    {
      type: 'form',
      mode: 'horizontal',
      title: '',
      affixFooter: true,
      api: {
        url: '/api/form/save',
        requestAdaptor: (api: any) => {
          console.log('api :>> ', api)
          return api
        },
      },
      redirect: '/admin/form/basic/advanced?age=${age}',
      actions: [
        {
          label: '保存',
          type: 'submit',
          level: 'success',
          onClick: (props: any) => {
            console.log('props :>> ', props)
          },
        },
      ],
      body: [
        {
          label: '名字',
          type: 'input-text',
          name: 'name',
          value: 'Aaron',
        },
        {
          label: '年龄',
          type: 'input-number',
          name: 'age',
          value: 10,
        },
      ],
    },
  ],
}

export default schema2component(schema)
