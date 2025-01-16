import React from 'react';


interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<String>>,
    handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<Props> = ({ todo, setTodo,handleAdd }:Props) => {
  return (
    <div className="relative ">
      <form action="" className="input flex" onSubmit={handleAdd}>
        <input
          type="text"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          placeholder="Enter a task"
          className="w-full h-8 rounded-lg pl-4 pr-28" // Add padding to avoid text overlap
        />
        <button
          className="bg-green-300 text-white hover:bg-green-600 rounded-lg h-8 absolute right-0 px-4 "
          type="submit"
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default InputField;
