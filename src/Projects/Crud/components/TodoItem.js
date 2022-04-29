import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faCake,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todoObj, onDelete, onEdit }) => {
  const editValues = () => {
    onEdit(todoObj.id, {
      email: todoObj.email,
      password: todoObj.password,
      first_name: todoObj.first_name,
      last_name: todoObj.last_name,
      birthday: todoObj.birthday,
    });
  };

  return (
    <div className="b-radius mar-bottom cColumns cColumns2R">
      <div className={`tA-left`}>
        {/* <p>id: {todoObj.id}</p> */}
        <p>
          <FontAwesomeIcon icon={faUser} /> {todoObj.first_name}{" "}
          {todoObj.last_name}
        </p>
        <p>
          <FontAwesomeIcon icon={faAt} /> {todoObj.email}
        </p>
        {/* <p>{todoObj.password}</p> */}
        <p>
          <FontAwesomeIcon icon={faCake} /> {todoObj.birthday}
        </p>
      </div>
      <div className={`cFilas a-center `}>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => onDelete(todoObj.id)}
          className={`red`}
        />
        <FontAwesomeIcon icon={faPencil} onClick={editValues} />
      </div>
    </div>
  );
};

export default TodoItem;
