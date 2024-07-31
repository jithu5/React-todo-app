import React from "react";

function TodoItems({ todos, setTodos, setTodo, inputRef, saveLocal }) {
  const handleCheckbox = (id) => {
    console.log("changed");
    const changedTodo = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, iscompleted: !todo.iscompleted }
        : todo;
    });
    setTodos(changedTodo);
    saveLocal(changedTodo);
  };

  const handleEdit = (id, newTodo) => {
    if (window.confirm(`Are you sure You want to edit ${newTodo}?`)) {
      inputRef.current.focus();
      setTodo(newTodo);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      saveLocal(updatedTodos);
    }
  };

  const handleDelete = (id, todo) => {
    console.log("delete");
    if (window.confirm(`Are you sure you want to delete ${todo}?`)) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      saveLocal(updatedTodos);
    }
  };

  return (
    <div className="todos">
      {todos.length === 0 ? (
        <h1
          className="text-center mx-auto text:2xl lg:text-4xl w-[65%] font-head my-10"
          style={{ textShadow: "2px 2px 4px rgba(255, 80, 0, 0.5)" }}
        >
          YOUR TODO IS EMPTY ADD TODO FOR GETTING YOUR TASKS DONE
        </h1>
      ) : (
        <>
          <h2 className="text-center mx-auto text-3xl lg:text-3xl w-[65%] font-head my-6">
            Not Done
          </h2>
          {todos.map((item) => {
            const complete = item.iscompleted ? "line-through" : "";
            const btnToggle = item.iscompleted ? "✔" : "DO";
            return (
              !item.iscompleted && (
                <div
                  key={item.id}
                  className="todo flex justify-between my-4 px-3 py-2 bg-whitish rounded-md text-black w-[85%] md:w-[50%] mx-auto"
                >
                  <div className="flex gap-3">
                    <button
                      className="px-2 py-0.5 bg-darkRose text-whitish border-2 border-rose-900 font-light md:font-semibold  rounded-md"
                      onClick={() => handleCheckbox(item.id)}
                      value={item.iscompleted}
                      id={item.id}
                    >
                      {btnToggle}
                    </button>
                    <h1
                      className={`${complete} text text-xl font-bold font-head text-darkRose`}
                    >
                      {item.todo}
                    </h1>
                  </div>
                  <div className="buttons flex gap-2">
                    <button
                      onClick={() => handleEdit(item.id, item.todo)}
                      className="px-2 py-0.5 bg-darkRose text-whitish border-2 border-rose-900
                       font-light md:font-semibold rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id, item.todo)}
                      className="px-2 py-0.5 bg-darkRose text-whitish border-2 border-rose-900 font-light md:font-semibold  rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            );
          })}
          <h2 className="text-center mx-auto text-3xl lg:text-3xl w-[65%] font-head my-6">
            Finished
          </h2>
          {todos.map((item) => {
            const complete = item.iscompleted ? "line-through" : "";
            const btnToggle = item.iscompleted ? "✔" : "DO";
            return (
              item.iscompleted && (
                <div
                  key={item.id}
                  className="todo flex justify-between my-4 px-3 py-2 bg-whitish rounded-md text-black w-[85%] md:w-[50%] mx-auto"
                >
                  <div className="flex gap-3">
                    <button
                      className="px-2 py-0.5 bg-darkRose text-whitish border-2 border-rose-900 font-light md:font-semibold  rounded-md"
                      onClick={() => handleCheckbox(item.id)}
                      value={item.iscompleted}
                      id={item.id}
                    >
                      {btnToggle}
                    </button>
                    <h1
                      className={`${complete} text text-sm md:text-xl font-light md:font-semibold  font-head text-darkRose`}
                    >
                      {item.todo}
                    </h1>
                  </div>
                  <div className="buttons flex gap-2">
                    <button
                      onClick={() => handleEdit(item.id, item.todo)}
                      className="px-2 py-0.5 bg-darkRose text-whitish border-2 border-rose-900 font-light md:font-semibold  rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id, item.todo)}
                      className="px-2 py-0.5 bg-darkRose text-whitish border-2 border-rose-900 font-light md:font-semibold  rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </>
      )}
    </div>
  );
}

export default TodoItems;
