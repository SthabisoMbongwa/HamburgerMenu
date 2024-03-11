import { BeakerIcon } from '@heroicons/react/24/solid'


function Header() {
  return (
    <div className="shadow-md w-full">
        <div className="md:px-10 py-4 px-7">
            {/* logo here */}
            <div className='flex text-2xl cursor-pointer items-center gap-1'>
                <BeakerIcon className='w-7 h-7 text-blue-600'/>
                <span className='font-bold'>Inscribe</span>
            </div>
        </div>
    </div>
  )
}

export default Header