import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import Singlecard from "./Singlecard";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Output: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <Singlecard
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos?.map((todo, index) => (
              <Singlecard
                index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

// const Output: React.FC<Props> = ({
//   todos,
//   setTodos,
//   completedTodos,
//   setCompletedTodos,
// }) => {
//   return (
//     <div className="container">
//       <Droppable droppableId="Todoslist">
//         {(provided) => (
//           <div
//             className="todos"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             <span className="todos__heading">Active tasks</span>
//             {todos?.map((todo, index) => (
//               <Singlecard
//                 index={index}
//                 todo={todo}
//                 key={todo.id}
//                 todos={todos}
//                 setTodos={setTodos}
//               />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//       <Droppable droppableId="TodosRemove">
//         {(provided) => (
//           <div
//             className="todos remove"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             <span className="todos__heading">Completed tasks</span>
//             {completedTodos.map((todo, index) => (
//               <Singlecard
//                 index={index}
//                 todo={todo}
//                 todos={completedTodos}
//                 key={todo.id}
//                 setTodos={setCompletedTodos}
//               />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

export default Output;
