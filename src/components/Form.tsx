import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  interface FormData {
    name: string;
    age: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  //   console.log(register("name"));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The Name field is Required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p>The Name must be three chracter.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age?.type === "required" && (
            <p className="text-danger">The Age field is Required</p>
          )}
        </div>
        <button className="btn btn-danger">Submit</button>
      </form>
    </>
  );
};

export default Form;
