import * as React from 'react'
import userModel from '../../models/userStore'
import AMisRenderer from '../../../components/AMisRenderer'
import { Schema } from 'amis/lib/types'

import { withModel } from 'hox'
console.log('withModel :>> ', withModel)

class Advanced extends React.Component<any> {
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
              $ref: 'userNameInput',
            },
            {
              type: 'wrapper',
              body: '获取Basic页面带过来的url参数 ${age}',
            },
          ],
        },
      ],
    }
    return (
      <>
        <AMisRenderer schema={schema} {...props} />
      </>
    )
  }
}
export default withModel(userModel, (user) => ({
  user,
}))(Advanced)
