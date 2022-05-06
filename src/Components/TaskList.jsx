import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import CheckBox from './CheckBox'

const TaskList = (props) => {

  const [ready, setReady] = useState(false)

  const initials = [{done:false, id:1212312, descripcion:"Mejorar en JavaScript (default)"},{done:false, id:12123154, descripcion:"Aprender Next.js (default)"},{done:false, id:1212314, descripcion:"Bañar al perro (default)"}]
  const {list, setList} = props
  
  const onChangeStatus = e => {
    const {name, checked} = e.target
    console.log('target:', e)
    console.log('name:', name)
    console.log('checked:', checked)
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }))
    setList(updateList)
  }
  
  const check = list.map(item => (

    <CheckBox key={item.id} data={item} onChange={onChangeStatus}/>
    
  ))

  let defaultValues = initials.map(item => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
  ))

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const onClickComenzar = e => {
    setReady(true)
    
  }

  return (
    <>
    <div className='w-full my-2'>
    {ready ? check : defaultValues}

    {list.length ? (
        <p>
          <button onClick={onClickRemoveItem}
          className="bg-slate-800 hover:bg-slate-500 rounded border-indigo-600 w-full h-12 text-white font-bold"
          >Eliminar Realizados</button>
        </p>
      ): (<p>
          <button onClick={onClickComenzar}
          className="bg-slate-800 hover:bg-slate-500 rounded border-indigo-600 w-full h-12 text-white font-bold disabled:invisible"
          disabled={ready ? true : false}
          >Comenzar</button>
        </p>)}

    </div>
    
    </>
  )
}

export default TaskList