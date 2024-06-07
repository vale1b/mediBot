import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../fetch/AxiosFetch";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    instance.post('/login', data)
    .then(response => {
      console.log('Inicio de sesion exitoso: ', response.status);
      if(response.status === 200) {
          navigate('/chatbot');
      }
    })
    .catch(error => {
      console.error('Error en el inicio de sesion: ', error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
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
              placeholder="Ingresa tu correo aquí"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3D5A98] focus:border-[#3D5A98]"
              placeholder="Ingresa tu contraseña aquí"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#3D5A98] focus:ring-[#3D5A98] border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Recuérdame
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#3D5A98]">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B0064] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D5A98]"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          ¿Aún no tienes cuenta?{" "}
          <Link to={"/register"} className="font-medium text-[#3D5A98]">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
