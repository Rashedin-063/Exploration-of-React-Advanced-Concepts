import { useReducer, useState } from 'react';
import Modal from '../components/Modal';
import { reducer } from './reducer';


 
const booksData = [
  { id: 1, name: 'Pather Panchali' },
  { id: 2, name: 'Adarsha Hindu Hotel' },
  { id: 3, name: 'Manab Jomin' },
];



const UseReducerHook = () => {
  // const [books, setBooks] = useState(booksData);
  // const [modalText, setModalText] = useState('');
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const initialState = {
    books: booksData,
    modalText: '',
    isModalOpen: false
  }

  const [bookState, dispatch] = useReducer(reducer, initialState)

  const [bookName, setBookName] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();

    if (bookName.trim()) {
      const newBook = { id: new Date().getTime().toString(), name: bookName };

      dispatch({ type: 'ADD', payload: newBook });

      setBookName('');
    }

    // setBooks((prevState) => {
    //   return [...prevState, newBook];
    // });
    // setIsModalOpen(true);
    // setModalText('Book is added');

  };

  const handleRemove = (id) => {
   
    dispatch({ type: 'REMOVE', payload: id });
  }

  return (
    <div className='text-white  flex justify-center items-center text-center   min-h-[90vh]'>
      <div className='bg-slate-900  p-8 rounded-md shadow-xl'>
        <h3 className='text-xl font-semibold border-b px-2 pb-1'>Book List</h3>
        <ol className='text-start space-y-2 mt-4'>
          {bookState.books.map((book, idx) => (
            <li key={book.id}>
              {' '}
              <span className='mr-4 border-b px-1 rounded-md'>{idx + 1}.</span>
              {book.name}
              <button
                onClick={() => handleRemove(book.id)}
                className='ml-4 text-xs bg-yellow-600 px-2 py-1 rounded-md'>Remove</button>
            </li>
          ))}
        </ol>
        {/* show modal text */}

        {bookState.isModalOpen && (
          <div className='border w-36 mx-auto rounded-md mt-8 text-center py-2'>
            <Modal
              modalText={bookState.modalText}
              onClose={() => dispatch({type: 'CLOSE_MODAL'})}
            />
          </div>
        )}

        {/* add book form */}
        <div>
          <form
            onSubmit={handleAddBook}
            className='mt-8 flex flex-col space-y-2 mx-8'
          >
            <input
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className='bg-gray-300  py-1 rounded-md focus:cursor-text text-black placeholder:text-gray-600 pl-4 font-semibold'
              type='text'
              placeholder='Add your book'
            />
            <button
              className='w-full bg-green-800 py-1 rounded-md '
              type='submit'
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UseReducerHook;
