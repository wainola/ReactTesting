import React from 'react'
import App from 'components/App'
import { shallow } from 'enzyme'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList';

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('show instacen of CommentBox and CommentList', () => {
  // Making the assertion => then the assertion 
  expect(wrapped.find(CommentBox).length).toEqual(1)
});

it('show an instance of CommentList', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})