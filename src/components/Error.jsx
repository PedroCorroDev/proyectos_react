
const Error = ({children}) => {
  return (
    <div className='text-white bg-red-800 text-center uppercase p-3 font-bold mb-3 rounded-md'>
        <p>{children}</p>
    </div>
  )
}

export default Error