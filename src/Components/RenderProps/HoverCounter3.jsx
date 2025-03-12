/* eslint-disable react/prop-types */
export default function HoverCounter3({ count, incrementCount }) {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  );
}
