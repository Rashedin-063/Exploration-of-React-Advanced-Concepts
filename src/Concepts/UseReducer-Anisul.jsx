/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { useState } from "react";
import { reducer } from "../utility/reducer";


const booksData = [
  { id: 1, name: 'Harry Potter and the Order of the Phoenix' },
  { id: 2, name: 'The Catcher in the Rye' },
  { id: 3, name: 'To Kill a Mockingbird' },
  { id: 4, name: '1984' },
  { id: 5, name: 'The Great Gatsby' },
  { id: 6, name: 'Pride and Prejudice' },
  { id: 7, name: 'The Help' },
];

const UseReducerAnisul = () => {

  // const [books, setBooks] = useState(booksData)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [modalText, setModalText] = useState('added')



  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: ''
  })
  
  const [bookName, setBookName] = useState('')
  const Modal = ({modalText}) => {
   return (
     <p className='bg-green-600 text-xl font-bold px-4 py-2 rounded-lg'>
       {modalText}
     </p>
   );
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName }
    dispatch({ type: 'ADD', payload: newBook })
    setBookName('')

    // setBooks(prevValue => {

    //  return [...prevValue, newBook]
    // })
    // setIsModalOpen(true);
    // setModalText(`${bookName} has been added successfully!`);
  }


  const handleRemove = (id) => { 
    dispatch({type: 'REMOVE', payload: id})
  }
  

  
  


  return (
    <div className='flex flex-col justify-center items-center min-h-[90vh] gap-y-4'>
      <h2 className='text-3xl font-semibold'>Book List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={bookName}
          className='px-8 py-2 rounded-md bg-gray-50 '
          onChange={(e) => setBookName(e.target.value)}
        />
        <button className='px-8 py-2 rounded-md bg-blue-700 text-white font-semibold ml-3' type='submit'>
          Submit
        </button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      <ul>
        {bookState.books.map((book, idx) => (
          <li key={book.id} className="flex gap-4 mb-1">
            <p className='text-xl '>
              <span>{idx + 1}.</span> {book.name}
            </p>
            <button onClick={() => handleRemove(book.id)} className="bg-orange-400 px-2 rounded-md">Remove</button>
            {/* <button onClick={() => setBooks(books.filter(b => b.id!== book.id))}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UseReducerAnisul