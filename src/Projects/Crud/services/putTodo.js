import axios from "axios";

const putTodo = async (id, todoObj) => {
  const URL = `https://users-crud1.herokuapp.com/users/${id}/`;
  const req = await axios.put(URL, todoObj);
  return req;
};

export default putTodo;
