import React from 'react';
import { useState } from 'react';

export default function Main() {
  interface todoType {
    name: string;
    id: number;
    isDone: boolean;
  }
  const [todoList, setTodoList] = useState<todoType[]>([{
    name:'study',id:1, isDone:false
  }])
  
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList && todoList.map((todo:todoType)=>
          <li key={String(todo.id)}>
            {todo.name}
          </li>
        )}
      </ul>
    </div>
  );
}

