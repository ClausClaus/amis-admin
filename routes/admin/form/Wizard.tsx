import schema2component from '../../../utils/schema2component'

const schema = {
  session: 'wizardStore',
  type: 'page',
  title: 'A页面',
  name: 'wizard',
  body: [
    {
      type: 'form',
      mode: 'horizontal',
      title: '',
      api: {
        url: '/api/form/save',
        requestAdaptor: (api: any) => {
          console.log('api :>> ', api)
          return api
        },
      },
      actions: [
        {
          label: '保存',
          type: 'submit',
          level: 'success',
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
          label: '展示url参数',
          type: 'input-text',
          name: 'msg',
        },
        {
          label: '年龄',
          type: 'input-number',
          name: 'age',
          value: 10,
        },
        {
          type: 'button',
          label: '修改其他页面的data',
          onClick: (e: any, props: any) => {
            console.log('props :>> ', props)
            console.log('props.env :>> ', props.env)
            console.log('props.amisScopeRef :>> ', props.amisScopeRef)
            console.log('props.scopeRef :>> ', props.scopeRef)
            console.log('props.store :>> ', props.store)
          },
        },
      ],
    },
  ],
}

export default schema2component(schema)
