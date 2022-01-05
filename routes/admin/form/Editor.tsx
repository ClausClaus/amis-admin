import schema2component from '../../../utils/schema2component'

const schema = {
  type: 'page',
  name: 'editor',
  title: 'B页面',
  body: [
    {
      type: 'wrapper',
      body: 'editor',
    },
    {
      label: '按钮',
      type: 'button',
    },
  ],
}

export default schema2component(schema)
