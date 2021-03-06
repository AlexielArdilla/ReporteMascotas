import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {

      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)

    } else {
      console.log("No hay nada")
    }

  }, [paciente])

  const generarId = () => {

    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return fecha + random
  }

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

    if (paciente.key) {
      //editando
      objetoPaciente.key = paciente.key

      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.key === paciente.key ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //creando
      objetoPaciente.key = generarId()
      setPacientes([...pacientes, objetoPaciente])

    }

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
        {error && <Error mensaje="Todos los campos son obligatorios." />}
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
        cursor-pointer transition-colors" value={paciente.key ? "Editar paciente" : "Agregar paciente"} />
      </form>
    </div>
  )
}

export default Formulario