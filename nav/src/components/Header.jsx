import { BeakerIcon } from '@heroicons/react/24/solid'



function Header() {
    let Links = [
        {name: 'Home', link: '/'},
        {name: 'Services', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Contact', link: '/'}
    ]
  return (
    <div className="shadow-md w-full bg-white fixed top-0 left-0">
        <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
            {/* logo here */}
            <div className='flex text-2xl cursor-pointer items-center gap-1'>
                <BeakerIcon className='w-7 h-7 text-blue-600'/>
                <span className='font-bold'>Inscribe</span>
            </div>
                <ul className='md:flex pl-9 md:pl-0'>    
                    {
                        Links.map(link => (
                        <li key ={Links} className='my-7 md:my-0 md:ml-8 ' >
                            <a href='/'>{link.name}</a>
                        </li>))
                    }
                    <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8'>
                        Get Started
                    </button>
                </ul>
            
        </div>
    </div>
  )
}

export default Header