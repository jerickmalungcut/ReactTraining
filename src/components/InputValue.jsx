import { useState } from "react";

const InputValue = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className="text-white bg-transparent outline-none py-2 px-4 rounded-full border border-white"
        placeholder="Input here!"
        onChange={handleChange}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default InputValue;
