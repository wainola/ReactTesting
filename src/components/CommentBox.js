import React, { Component } from 'react'

export class CommentBox extends Component {
  state = {
    comment: ''
  }
  handleChange = e => {
    this.setState({ comment: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()

    // call and action creator
    // and save the comment
    this.setState({
      comment: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea  value={this.state.comment} onChange={this.handleChange}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentBox
