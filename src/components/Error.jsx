


const Error = ({mensaje}) => {
  return (
    <div>
          <p className='bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            { mensaje }
          </p>
        </div>
  )
}

export default Error