import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1) 
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    })
    wrapped.update()
  })
  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('is submit the form and checks if the textarea is empty', () => {
    wrapped.find('textarea').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
