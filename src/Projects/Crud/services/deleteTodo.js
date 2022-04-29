import axios from "axios";

const deleteTodo = async (id) => {
  const URL = `https://users-crud1.herokuapp.com/users/${id}`;
  const req = await axios.delete(URL);
  return req;
};

export default deleteTodo;
