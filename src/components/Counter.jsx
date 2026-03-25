import { useState, useEffect } from "react";

const Counter = () => {
    const [refetch, setRefetch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  const [numHold, setNumHold] = useState(0);
  const [textTyped, setTextTyped] = useState("");

  const addOne = () => {
    setNumHold(numHold + 3);
  };
  const subtOne = () => {
    setNumHold(numHold - 1);
  };

  return (
    <div className="px-6 my-10">
      <form className="my-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="border  border-gray-600 rounded-md outline-none px-2 py-2"
          onChange={(e) => setTextTyped(e.target.value)}
          value={textTyped}
        />
        <button
          onClick={() => console.log(textTyped)}
          className="border border-gray-500 py-1 px-4 rounded-md bg-slate-200 "
        >
          submit
        </button>
      </form>
      <p className="font-bold text-4xl">{numHold}</p>
      <div className="flex gap-4 mt-3">
        <button
          onClick={addOne}
          className="border border-gray-500 py-1 px-4 rounded-md bg-slate-200"
        >
          Add 3
        </button>
        <button
          onClick={subtOne}
          className="border border-gray-500 py-1 px-4 rounded-md bg-slate-200"
        >
          Subtract 1
        </button>
      </div>
      {/* conditional rendering using tenary operator */}
      {/* <p className="mt-5">
        {numHold > 10
          ? "this is rendering because it is more then 10"
          : "This is rendering because the number is not up to 10"}
      </p> */}

      {/* coditional rendering using the && operator */}
      {numHold > 10 && (
        <span>
          this is rendering because the number is greater than 10. We are
          rendering this using the && operator
        </span>
      )}

      <button className="" onClick={() => setRefetch((prev) => !prev)}>
        Refetch
      </button>
    </div>
  );
};

export default Counter;
