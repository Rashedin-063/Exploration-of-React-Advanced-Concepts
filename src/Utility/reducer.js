 export                                                         const reducer = (state, action) => {
    if (action.type === 'ADD') {
      const allBooks = [...state.books, action.payload]
      return {
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalText: `${action.payload.name} has been added successfully!`,
   }
}
    if (action.type === 'REMOVE') {
      const selectedBook = [...state.books].find(book => book.id === action.payload)
      const filteredBooks = [...state.books].filter(book => book.id !== action.payload)
      
      return {
        ...state,
        books: filteredBooks,
        isModalOpen: true,
        modalText: `${selectedBook.name} has been removed successfully!`,
      }

}
  }