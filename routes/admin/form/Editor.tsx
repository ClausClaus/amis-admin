import schema2component from '../../../utils/schema2component'

const schema = {
  session: 'editorStore',
  type: 'page',
  name: 'editor',
  title: 'B页面',
  data: {
    msg: 'message',
  },
  body: [
    {
      type: 'wrapper',
      body: '${msg}',
    },
    {
      label: '按钮',
      type: 'button',
      onClick: (e: any, props: any) => {
        console.log('props :>> ', props)
        console.log('props.env :>> ', props.env)
        console.log('props.amisScopeRef :>> ', props.amisScopeRef)
        console.log('props.scopeRef :>> ', props.scopeRef)
        console.log('props.store :>> ', props.store)
      },
    },
    {
      label: '跳转',
      type: 'button',
      actionType: 'link',
      link: '/admin/form/wizard?msg=${msg}',
    },
  ],
}

export default schema2component(schema)
