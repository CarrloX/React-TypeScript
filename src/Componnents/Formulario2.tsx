import { useForm } from '../hooks/useForm';

interface FormData{
    postal: string;
    ciudad: string;
  }

export const Formulario2 = () => {
    const { postal, ciudad, formulario, handleChange } = useForm<FormData>({
        postal: "ABC",
        ciudad: "louisiana",
      });
    
      return (
        <form autoComplete="off">
          <div className="mb-3">
            <label className="form-label">Codigo Postal:</label>
            <input
              type="text"
              className="form-control"
              name="ciudad"
              value={postal}
              onChange={handleChange}
              placeholder="Ingrese su codigo postal"
            />
          </div>
    
          <div className="mb-3">
            <label className="form-label">Ciudad:</label>
            <input
              type="text"
              className="form-control"
              name="ciudad"
              value={ciudad}
              onChange={handleChange}
              placeholder="Ingrese su ciudad"
            />
          </div>
    
          <pre>{JSON.stringify(formulario)}</pre>
        </form>
      );
}
