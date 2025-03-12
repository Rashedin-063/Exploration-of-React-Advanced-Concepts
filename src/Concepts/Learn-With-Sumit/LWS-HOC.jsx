/**
 * React Higher Order Components (HOC) is mostly replaced by React custom hooks in React 16.8. It's still used in some third party libraries, but it's very rare.
 */


// import ClickCounter from "../../Components/HOC/ClickCounter"
// import HoverCounter from "../../Components/HOC/HoverCounter"
import ClickCounter2 from "../../Components/CustomHook/ClickCounter2";
import HoverCounter2 from './../../Components/CustomHook/HoverCounter';


const HigherOrderComponent = () => {
  return (
    <div className="text-center text-5xl font-semibold border border-b-4 border-r-4 border-indigo-700 p-8 rounded-md drop-shadow-md hover:border-rose-600">
      Hello World
    {/* HOC */}
      {/* <div className="flex gap-4 mt-8">
        <ClickCounter />
        <HoverCounter />
      </div> */}
      {/* custom hook */}
      <div className="flex gap-4 mt-8">
        <ClickCounter2 />
        <HoverCounter2 />
      </div>
    </div>
  );
}
export default HigherOrderComponent