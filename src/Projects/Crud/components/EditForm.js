import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faLock,
  faCake,
} from "@fortawesome/free-solid-svg-icons";

const EditForm = ({ defValues, onEdit }) => {
  console.log("aqui activo", defValues);
  const defaultValues = {
    // id: 1994,
    email: defValues.email,
    password: defValues.password,
    first_name: defValues.first_name,
    last_name: defValues.last_name,
    birthday: defValues.birthday,
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (res) => {
    onEdit(res);
  };

  return (
    <>
      EditUser
      <form onSubmit={handleSubmit(onSubmit)} className={` `}>
        <p className=" cColumns cColumns3L width100 ">
          <FontAwesomeIcon icon={faUser} />
          <input
            {...register("first_name")}
            placeholder="first name"
            className="width90"
          />

          <input
            {...register("last_name")}
            placeholder="last name"
            className="width90"
          />
        </p>

        <div className="cColumns cColumns2L width100">
          <FontAwesomeIcon icon={faAt} className=" " />
          <input {...register("email")} placeholder="email" className=" " />
        </div>

        <div className="cColumns cColumns2L width100">
          <FontAwesomeIcon icon={faLock} />
          <input
            {...register("password")}
            placeholder="password"
            className=""
            type={`password`}
          />
        </div>
        <div className="cColumns cColumns2L width100">
          <FontAwesomeIcon icon={faCake} />
          <input
            {...register("birthday")}
            placeholder="birthday"
            className=""
            type={`date`}
          />
        </div>
        <div className="cColumns cColumns1L width100">
          <button className="boton">actualizar datos</button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
