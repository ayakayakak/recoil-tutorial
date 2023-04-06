import { useRecoilValue } from "recoil";
import { TodoListStats } from "./todo-list-stats";
import { TodoListFilters } from "./todo-list-filters";
import { TodoItemCreator } from "./todo-item-creator";
import { TodoItem } from "./todo-item";
import { filteredTodoListState } from "../recoil-state";

export const TodoList = () => {
  // Reads the recoil value
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <div style={{ display: 'flex', gap: '10px' }}>
        <TodoItemCreator />
        <TodoListFilters />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};