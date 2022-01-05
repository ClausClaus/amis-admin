import schema2component from '../../../utils/schema2component'

const schema = {
  type: 'page',
  name: 'advanced',
  title: '获取URL参数',
  subTitle: 'url 中的参数会进入顶层数据域，可直接通过${xxx}获取',
  body: [
    {
      type: 'form',
      mode: 'horizontal',
      title: '',
      affixFooter: true,
      api: '/api/form/save',
      actions: [
        {
          label: '保存',
          type: 'submit',
          level: 'success',
        },
      ],
      body: [
        {
          type: 'wrapper',
          body: '获取Basic页面带过来的url参数 ${age}',
        },
      ],
    },
  ],
}

export default schema2component(schema)
