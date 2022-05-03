import { useState, useEffect } from 'react';

function Formulario({ pacientes, setPacientes }) {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación del formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {

      setError(true)
      return
    }
      setError(false)

      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        alta, 
        sintomas
      }
        //console.log(objetoPaciente)
      setPacientes([...pacientes, objetoPaciente])

      //resetear el form
      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
        {error && <div>
          <p className='bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            Todos los campos son obligatorios
          </p>
        </div>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">nombre mascota</label>
          <input id="mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="nombre de la mascota" />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">nombre propietario</label>
          <input id="propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" placeholder="nombre del propietario" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">email</label>
          <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email contacto propietario" />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">alta</label>
          <input id="alta" value={alta} onChange={(e) => setAlta(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea name="sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} className="border-2 w-full p-2 mt-2" id="sintomas" placeholder="Describe tus síntomas" />
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800
        cursor-pointer transition-colors" value="Agregar paciente" />
      </form>
    </div>
  )
}

export default Formulario