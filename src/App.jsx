import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  // 初期値をlocalStorageから読み込む
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    // localStorageにデータがない場合のデフォルトデータ
    return [
      {
        id: 1,
        text: "Reactの基礎を学ぶ",
        completed: false
      },
      {
        id: 2,
        text: "Todoアプリを作成する",
        completed: false
      },
      {
        id: 3,
        text: "JavaScriptの復習をする",
        completed: true
      }
    ];
  });

  // Todoデータが変更されるたびにlocalStorageに保存
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 新しいIDを生成する関数
  const generateNewId = () => {
    if (todos.length === 0) return 1;
    const maxId = Math.max(...todos.map(todo => todo.id));
    return maxId + 1;
  };

  // 新しいTodoを追加する関数
  const addTodo = (text) => {
    const newTodo = {
      id: generateNewId(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  // Todo削除関数
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Todo更新関数
  const updateTodo = (id, newText) => {
    const updateTodos = todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updateTodos);
  }

  // Todo完了状態切り替え関数
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo アプリ
        </h1>
        
        <TodoForm onAddTodo={addTodo} />

        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onUpdateTodo={updateTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </div>
  )
}

export default App