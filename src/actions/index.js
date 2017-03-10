// 这里是action creater，返回的内容是action，此文件包含了所有这个应用所需的action creater
// Error: Actions must be plain objects. Use custom middleware for async actions.

// selectBook is an ActionCreater, it needs to return an action,
// an object with a type property
export default function selectBook(book) {
  // console.log(book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}









