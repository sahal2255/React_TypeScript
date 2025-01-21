import React from "react";
import { Todo } from "../model";
import { FiEdit3 } from "react-icons/fi"; // Edit icon
import { MdDelete } from "react-icons/md"; // Delete icon

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  // Handle delete function
  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  // Handle toggle completion
  const handleToggleComplete = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between w-64">
      <span
        className={`text-lg font-medium ${
          todo.isCompleted ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.name}
      </span>
      <div className="flex gap-2">
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={handleToggleComplete}
        >
          <FiEdit3 size={20} />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDelete}
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
