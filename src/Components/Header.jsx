import React, { useState } from 'react'
import DarkLogo from '../Assets/logo-to-dark.png'
import Moon from '../Assets/Moon.svg'
import Sun from '../Assets/Sun.svg'
import LightLogo from '../Assets/logo-to-light.png'
import GithubLogo from './GithubLogo.jsx'

const Header = () => {

    const [isDark, setIsDark] = useState(false)
    const onClick = () => {
         document.documentElement.classList.toggle('dark')
         setIsDark(!isDark)
         console.log(isDark)
    }

  return (
      <>
      <div className=' flex flex-row justify-center mb-3 mt-5'>
        <div className=' rounded-md row flex flex-row w-full justify-between items-center px-4 py-4 shadow'>
            <div className='flex flex-row items-center'>
                {isDark ? (<img src={DarkLogo} alt='logo'
                className='w-10'/>) : (<img src={LightLogo} alt='logo'
                className='w-10'/>    )}    
                <p className='dark:text-slate-50'><strong className='text-xl'>App</strong>Notas</p>
                </div>
            <nav >
                <ul className='flex flex-row items-center'>
                    <li className='mr-3'><a href='https://github.com/ginigo-arg/To-Do-List' target='_blank' rel='noreferrer'>

                        {isDark ? <GithubLogo color='#fff'/> : <GithubLogo color='#545454'/>}
                        </a>
                        </li> 
                        { isDark ?
                        (<button onClick={onClick} className='bg-slate-600 p-1 rounded'><img src={Moon} alt="" /></button>) : (<button onClick={onClick} ><img src={Sun} alt="" /></button>) 

                        }         
                </ul>
            </nav>
        </div>
      </div>
      </>
  )
}

export default Header