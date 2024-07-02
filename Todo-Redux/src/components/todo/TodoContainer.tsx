import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

type TItem = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean | undefined;
  priority: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  //* From local state
  // const { todos } = useAppSelector((state) => state.todos);

  //* From server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  //* Sort todos based on isCompleted status
  // used slice to make the copy of the array
  const sortedTodos = todos?.data?.slice().sort((a: TItem, b: TItem) => {
    if (a.isCompleted === b.isCompleted) return 0;
    if (a.isCompleted === true) return 1;
    return -1;
  });

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {sortedTodos.map((item: TItem, ind: string) => (
            <TodoCard key={ind} {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
