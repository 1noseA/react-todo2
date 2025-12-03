import { useState } from 'react';

function TodoItem({ todo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDelete = () => {
    const isConfirmed = window.confirm(`「${todo.text}」を削除してもよろしいですか？`);

    if (isConfirmed) {
      onDeleteTodo(todo.id);
    }
  };

  // 編集モード開始
  const handleEditStart = () => {
    setIsEditing(true);
  };

  return (
    <div className={`p-3 rounded shadow flex justify-between items-center ${
      todo.completed
        ? 'bg-green-50 border border-green-200'
        : 'bg-white'
    }`}>
      <div className="flex-1">
        {isEditing ? (
          // 編集モード：入力フォームを表示
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        ) : (
          // 表示モード：テキストとクリックイベントを表示
          <div onClick={handleEditStart} className="cursor-pointer">
            <p className={`${
              todo.completed
                ? 'text-gray-500 line-through'
                : 'text-gray-800'
            }`}>
              {todo.text}
            </p>
            <p className="text-sm text-gray-500">
              状態: {todo.completed ? '✅ 完了' : '⏳ 未完了'}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={handleDelete}
        className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
      >
        削除
      </button>
    </div>
  );
}

export default TodoItem;