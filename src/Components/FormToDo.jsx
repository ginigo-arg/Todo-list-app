import React, { useState } from 'react'

const FormToDo = (props) => {

  const [descripcion, setDescripcion] = useState("")
  const {handleAddItem} = props
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddItem({
      done: false,
      id:(+new Date()).toString(),
      descripcion
    })
    setDescripcion("")

  }


  return (
    <>
    <form onSubmit={handleSubmit}
    className='w-full flex flex-row justify-center my-4 mb-8'>
      <input
      type="text"
      name=''
      value={descripcion}
      placeholder="Agrega una nota"
      onChange={(e)=>{
        setDescripcion(e.target.value)
      }}
      className="border rounded-md rounded-r-none w-8/12 shadow
      px-3 py-2 focus:outline-none focus:border-slate-200 border-r-0 dark:bg-slate-700 dark:border border-slate-500 dark:text-slate-50 transition-all ease-in-out duration-700"
      >
      </input>
      <button
      disabled={descripcion ? "" : "disable"}
      className="border rounded-l-none bg-slate-800 hover:bg-slate-400 text-white font-semibold p-2 w-3/12 shadow rounded-lg hover:bg-slate-500/100 disabled:bg-slate-400 disabled:cursor-not-allowed active:shadow-none transition-all ease-in-out duration-700"
      >Agregar</button>
    </form>
    </>
  )
}

export default FormToDo