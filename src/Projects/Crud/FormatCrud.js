import { useEffect, useState } from "react";
import getAllTodos from "./services/getAllTodos";
import TodoItem from "./components/TodoItem";
import postNewUser from "./services/postNewUser";
import deleteTodo from "./services/deleteTodo";
import putTodo from "./services/putTodo";
import SpinnerRick from "../Tools/SpinnerRick";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";

function FormatCrud() {
  const [todos, setTodos] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [idSelected, setIdSelected] = useState("");
  const [editObj, setEditObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);

  useEffect(() => {
    getAllTodos().then((response) => {
      setLoading(true);
      setTodos(response.data);
    });
  }, []);

  const handlerOnCreateUser = (event) => {
    setNewUser(event);
  };

  const Post = (u) => {
    postNewUser(u).then((response) => {
      setTodos([response.data, ...todos]);
    });
  };

  useEffect(() => {
    if (Object.keys(newUser).length !== 0) {
      Post(newUser);
    }
  }, [newUser]);

  const filterTodo = (id) => {
    const array = todos.filter((item) => item.id !== id);
    return array;
  };

  const Edit = (id, obj) => {
    putTodo(id, obj).then((res) => {
      console.log(res);
      setTodos([...filterTodo(id), res.data]);
    });
  };

  const handleEdit = (id, obj) => {
    setIdSelected(id);
    setEditObj(obj);
    setDisplayEdit(!displayEdit);
    setDisplayForm(false);
  };

  const handleOnEdit = (res) => {
    Edit(idSelected, res);
  };

  const Delete = (id) => {
    deleteTodo(id).then((res) => {
      setTodos(filterTodo(id));
    });
  };

  const handleDelete = (id) => {
    Delete(id);
  };

  const list = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todoObj={todo}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  ));

  return (
    <div className="cColumns cColumns2R">
      <div className="">{!loading ? <SpinnerRick /> : list}</div>
      <div className="cFilas ">
        <div className=" ">
          {!displayEdit ? (
            <button
              className="boton"
              onClick={() => setDisplayForm(!displayForm)}
            >
              {!displayForm
                ? "mostrar campo crear nuevo usuario"
                : "ocultar nuevo usuario "}
            </button>
          ) : (
            ""
          )}

          {displayForm && <CreateForm onCreate={handlerOnCreateUser} />}
          {displayEdit && (
            <EditForm defValues={editObj} onEdit={handleOnEdit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FormatCrud;
