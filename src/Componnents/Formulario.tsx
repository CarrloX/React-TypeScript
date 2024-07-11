import { useForm } from "../hooks/useForm";

interface FormData{
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { nombre, email, edad, formulario, handleChange } = useForm<FormData>({
    email: "carlox234@hola.com",
    nombre: "carlos",
    edad: 35,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Ingrese su email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
          placeholder="Ingrese su edad"
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
