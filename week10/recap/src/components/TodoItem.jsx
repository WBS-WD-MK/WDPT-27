const TodoItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.title} </span>
      <span>{todo.completed ? 'done' : 'to do'}</span>
    </div>
  );
};

export default TodoItem;
