// eslint-disable-next-line react/prop-types
const Modal = ({ modalText, onClose }) => {
  return (
    <div className="relative">
      <p>{modalText}</p>
      <button  onClick={onClose} className="absolute -top-5 -right-2 bg-white text-black p-1 h-6 w-6 flex justify-center items-center font-semibold text-sm rounded-full">X</button>
    </div>
  );
};

export default Modal