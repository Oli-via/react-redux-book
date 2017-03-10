/**
 * Created by aliyy on 2017/1/14.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component{ //Component后面没有小括号！！！
  render() {
    //this.props.activeBook就是rootReducer中的activeBook
    if (!this.props.activeBook){
      return <h3>Please select a book to get started.</h3>
    }
    return (
      <div>
        <h3>The book is:</h3>
        <div>Title: {this.props.activeBook.title}</div>
        <div>Pages: {this.props.activeBook.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)