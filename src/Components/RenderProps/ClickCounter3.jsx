/* eslint-disable react/prop-types */

export default function ClickCounter3({ count, incrementCount }) {
  return (
    <div>
      <button type='button' onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}
