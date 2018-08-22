import React from "react";
import IconButton from "../template/IconButton";
import If from "../template/If";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <If test={!todo.done}>
            <IconButton
              icon="check"
              onClick={() => props.handleMarkAsDone(todo)}
            />
          </If>
          <If test={todo.done}>
            <IconButton
              style="warning"
              icon="undo"
              onClick={() => props.handleMarkAsPending(todo)}
            />
          </If>

          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
