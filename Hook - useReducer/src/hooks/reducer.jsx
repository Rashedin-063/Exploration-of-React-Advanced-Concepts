
export const reducer = (state, action) => {
  //action.type && action.payload

  if (action.type === 'ADD') {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: 'Book Added',
    };
  }
  if (action.type === 'REMOVE') {
    const remainingBooks = state.books.filter(
      (book) => book.id !== action.payload
    );
    return {
      ...state,
      books: remainingBooks,
      isModalOpen: true,
      modalText: 'Book Removed',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  return state;
};
