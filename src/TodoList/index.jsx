import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchTodosFilter.length &&
        props.onEmptyTodosSearch()}

      <ul>{props.searchTodosFilter.map(props.render || props.children)}</ul>
    </section>
  );
}

export { TodoList };
