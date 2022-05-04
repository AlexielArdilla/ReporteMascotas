import Paciente from "./Paciente"


function ListadoPacientes({pacientes, setPaciente}) {

   
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
            <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y citas</span></p>
           {pacientes.map((paciente)=>{
               
               return( <Paciente 
                paciente={paciente}
                key = {paciente.key}
                setPaciente = {setPaciente}
               />) 
           })}
            </>) : 
            <>
            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza agregando <span className="text-indigo-600 font-bold">Pacientes y aparecerán aquí</span></p>
          
            </>}
            
           
           
            
        </div>
    )
}

export default ListadoPacientes
