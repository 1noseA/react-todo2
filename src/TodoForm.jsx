import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    // 入力チェック
    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
      console.log('入力が空です')
      return;
    }

    // 文字数制限（例：100文字まで）
    if (trimmedValue.length > 100) {
      return;
    }

    // 親コンポーネントのaddTodo関数を呼び出す
    onAddTodo(inputValue.trim());

    // 入力欄をクリア
    setInputValue('');
  }

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="新しいTodoを入力してください"
          maxLength={100}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          追加
        </button>
      </form>
    </div>
  )
}

export default TodoForm;
