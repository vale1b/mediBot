import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrors([{ msg: 'Las contraseñas no coinciden' }]);
      return;
    }

    // Datos del formulario
    const data = { email, password, termsAccepted };

    // Realizar la petición POST con Axios
    axios.post('http://localhost:4000/api/user/register', data)
      .then(response => {
        console.log('Registro exitoso:', response.data);
        // Registro correcto
        // Redirigir al usuario a otra página o realizar alguna acción de éxito
      })
      .catch(error => {
        console.error('Error en el registro:', error.response ? error.response.data : error.message);
        // Manejar los errores de validación del servidor
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          setErrors([{ msg: 'Error en la conexión con el servidor' }]);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-Nunito">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Tu email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3D5A98] focus:border-[#3D5A98]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#3D5A98]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirma tu contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3D5A98] focus:border-[#3D5A98]"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-4 w-4 text-[#3D5A98] focus:ring-[#3D5A98] border-gray-300 rounded"
              required
            />
            <label
              htmlFor="termsAccepted"
              className="ml-2 block text-sm text-gray-900"
            >
              Acepto los términos y condiciones
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B0064]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D5A98] "
            >
              Registrarse
            </button>
          </div>
        </form>
        {errors.length > 0 && (
          <div className="mt-6">
            {errors.map((error, index) => (
              <div key={index} className="text-red-500 text-sm">
                {error.msg}
              </div>
            ))}
          </div>
        )}
        <p className="mt-6 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link to={'/login'} className="font-medium text-[#3D5A98] ">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
