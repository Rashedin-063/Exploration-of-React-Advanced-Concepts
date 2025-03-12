import ClickCounter3 from "../../Components/RenderProps/ClickCounter3";
import Counter from "../../Components/RenderProps/Counter";
import HoverCounter3 from "../../Components/RenderProps/HoverCounter3";


const LWSRenderProps = () => {
  return (
    <div>
      <Counter>
        {(counter, incrementCount) => (
          <ClickCounter3 count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter3 count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}
export default LWSRenderProps