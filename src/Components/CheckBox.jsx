import React from 'react'

const CheckBox = (props) => {

  const {onChange,
          data:{ id, descripcion, done}}= props

  return (
    <div className='border rounded my-4 shadow min-h-full py-2 dark:bg-slate-800 dark:border-none transition-all ease-in-out duration-700'>
      <label className='flex flex-row justify-center items-center'>
        <input
        type="checkbox"
        defaultChecked={done}
        name={id}
        onChange={onChange}
        className='w-1/12 accent-sky-700'
        />
        <div className='w-11/12 dark:text-sky-50 transition-all ease-in-out duration-700'>{descripcion}</div>
      </label>
    </div>
  )
}

export default CheckBox