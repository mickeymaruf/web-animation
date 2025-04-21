import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";

export default function ToDoExitAnimation() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([{ id: Date.now(), text: task, done: false }, ...todos]);
    setTask("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-24">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <ul className="space-y-2">
          <AnimatePresence>
            {todos.map((todo) => (
              <Task
                key={todo.id}
                todo={todo}
                toggleDone={toggleDone}
                deleteTodo={deleteTodo}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>

      {/* Input Popup */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-200"
          >
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task..."
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
              />
              <button
                onClick={addTodo}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Floating Button */}
      <button
        onClick={() => setShowInput(!showInput)}
        className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition cursor-pointer"
      >
        <FiPlus
          size={24}
          className={`${showInput ? "rotate-45" : "rotate-0"} duration-200`}
        />
      </button>
    </div>
  );
}

const Task = ({ todo, toggleDone, deleteTodo }) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        animate(
          "span",
          {
            color: "#ff0000",
            textDecoration: "line-through",
          },
          { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
        );

        await animate(
          scope.current,
          {
            scale: 1.05,
          },
          { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
        );

        await animate(scope.current, {
          x: 25,
          opacity: 0,
        });

        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <motion.li
      ref={scope}
      initial={{ x: 25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      layout
      className="flex items-center justify-between bg-white px-3 py-2 rounded border border-gray-200 shadow-sm"
    >
      <span
        className={`flex-1 cursor-pointer ${
          todo.done ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleDone(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        &times;
      </button>
    </motion.li>
  );
};
