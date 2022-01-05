import schema2component from '../../../utils/schema2component'

const schema = {
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
      // redirect: '/admin/form/basic/editor',
      actions: [
        {
          label: '保存',
          type: 'submit',
          level: 'success',
          onClick: (e: any, props: any) => {
            console.log('props :>> ', props)
            console.log('event :>> ', e)
            console.log('props :>> ', props.env)
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
