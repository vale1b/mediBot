import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    axios.post('http://localhost:4000/api/user/login', data)
    .then(response => {
      console.log('Inicio de sesion exitoso: ', response.data);
    })
    .catch(error => {
      console.error('Error en el inicio de sesion: ', error);
    });
  };

  return (
    <div className='min-h-screen bg-primary flex flex-col items-center justify-center'>
    <h2 className='uppercase text-white font-bold text-2xl my-3'>Medibot</h2>
    <form onSubmit={handleSubmit} className='bg-white w-7/12 max-w-[370px] min-w-[320px] rounded-3xl py-2 px-4'>
      <h3 className='text-center py-3 font-bold text-xl text-primary'>Inicia Sesión con tu cuenta</h3>
      <label htmlFor="email" className='block font-bold py-2 ml-2 text-primary'>Tu email</label>
      <input 
        className='w-full bg-gray-300 py-2 rounded-3xl px-3 placeholder:text-gray-400 placeholder:font-bold' 
        type="text" 
        name="email" 
        id="email" 
        placeholder='Ingresa tu correo aqui' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='block font-bold py-2 ml-2 text-primary' htmlFor="password">Contraseña</label>
      <input 
        className='w-full bg-gray-300 py-2 rounded-3xl px-3 placeholder:text-gray-400 placeholder:font-bold' 
        type="password" 
        name="password" 
        id="password" 
        placeholder='Ingresa tu contraseña aqui' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='flex justify-between px-3 py-4 items-center'>
        <span className='font-bold text-black text-sm'>
          <input className='mr-2 cursor-pointer' type="checkbox" name="recuerdame" />
          Recuerdame
        </span>
        <a href="#" className='text-black font-bold text-sm'>olvidaste tu contraseña?</a>
      </div>
      <button 
        className='bg-secondary tracking-wide text-white font-bold w-11/12 block mx-auto py-2 my-2 rounded-3xl hover:bg-primary' 
        type="submit"
      >
        iniciar sesión
      </button>
      <p className='text-black mx-4 my-3 text-sm font-bold flex justify-center '>Aun no tienes cuenta? 
        <Link className='ml-2 hover:underline hover:decoration-solid pb-1 hover:underline-offset-4' to={'/register'}>
          Registrate aqui
        </Link>
      </p>
    </form>
  </div>
  )
}

export default LoginPage;
