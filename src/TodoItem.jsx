function TodoItem({ todo }) {
  return (
    <div className="bg-white p-3 rounded shadow">
      <p className="text-gray-800">{todo.text}</p>
      <p className="text-sm text-gray-500">
        状態: {todo.completed ? '完了' : '未完了'}
      </p>
    </div>
  );
}

export default TodoItem;