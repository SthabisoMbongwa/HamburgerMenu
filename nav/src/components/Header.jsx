import { BeakerIcon, Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'



function Header() {
    let Links = [
        {name: 'Home', link: '/'},
        {name: 'Services', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Contact', link: '/'}
    ]

    let [isOpen, setisOpen] = useState(false);
  return (
    <div className="shadow-md w-full bg-white fixed top-0 left-0 ">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
            {/* logo here */}
            <div className='flex text-2xl cursor-pointer items-center gap-1'>
                <BeakerIcon className='w-7 h-7 text-blue-600'/>
                <span className='font-bold'>Inscribe</span>
            </div>

            <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                {
                    isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
                }
              
            </div>


                <ul className='md:flex pl-9 md:pl-0'>    
                    {
                        Links.map(link => (
                        <li key ={Links} className='my-7 md:my-0 md:ml-8 ' >
                            <a href='/'>{link.name}</a>
                        </li>))
                    }
                    <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>
                        Get Started
                    </button>
                </ul>
            
        </div>
    </div>
  )
}

export default Header