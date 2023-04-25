import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="col-md-4 mx-auto mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="w-100 mt-2" placeholder='Фамилия' {...register("lastName")} />
        <br/>
        <input className="w-100 mt-2" placeholder='Имя' {...register("name", { required: true , maxLength:50, 
        pattern: /^[А-Яа-я]/
        })} />
        {errors?.name?.type === "required" && <span>Поле обязательно для заполнения</span>}
        {errors?.name?.type === "pattern" && <span>Некоректно задано Имя</span>}
        <br/>
        <input className="w-100 mt-2" placeholder='Отчество' {...register("patronymic")} />
        <br/>
        <input className="w-100 mt-2" placeholder='Email'{...register("email", { required: true })} />
        {errors?.email?.type === "required" && <span>Поле обязательно для заполнения</span>}
        
        <br/>
        <input  type="submit" className="btn btn-outline-primary mx-auto mt-2"/>
      </form>
    </div>
  );
}