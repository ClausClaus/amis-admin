import * as React from 'react'
import userModel from '../../models/userStore'
import AMisRenderer from '../../../components/AMisRenderer'
import { Schema } from 'amis/lib/types'

import { withModel } from 'hox'
console.log('withModel :>> ', withModel)

class Basic extends React.Component<any> {
  handleClick() {
    const { user } = this.props
    user.setUser('new user name')
  }

  render(): React.ReactNode {
    const props = this.props

    const schema: Schema = {
      definitions: {
        userNameInput: {
          label: '名字',
          type: 'input-text',
          name: 'name',
          value: props.user.user,
        },
      },
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
          debug: true,
          api: {
            url: '/api/form/save',
            requestAdaptor: (api: any) => {
              console.log('api :>> ', api)
              return api
            },
          },

          actions: [
            {
              type: 'button',
              actionType: 'link',
              link: '/admin/form/basic/advanced?age=${age}',
              label: '跳转到advanced',
            },
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
              $ref: 'userNameInput',
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
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>点击</button>
        <span>{props.user.user}</span>
        <AMisRenderer schema={schema} {...props} />
      </>
    )
  }
}

export default withModel(userModel, (user) => ({
  user,
}))(Basic)
