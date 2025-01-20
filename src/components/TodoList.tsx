import React from 'react';
import { Todo } from '../model';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-5 justify-center">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-1/3 max-w-xs"
        >
          <p className="font-semibold text-lg text-gray-800">{todo.name}</p>
          <button
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700"
            onClick={() => {
              // Remove the todo item when clicked
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
