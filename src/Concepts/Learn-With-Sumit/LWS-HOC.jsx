import ClickCounter from "../../Components/ClickCounter"
import HoverCounter from "../../Components/HoverCounter"


const HigherOrderComponent = () => {
  return (
    <div className="text-center text-5xl font-semibold border border-b-4 border-r-4 border-indigo-700 p-8 rounded-md drop-shadow-md hover:border-rose-600">
      Hello World
      <div className="flex gap-4 mt-8">
        <ClickCounter />
        <HoverCounter />
      </div>
    </div>
  );
}
export default HigherOrderComponent