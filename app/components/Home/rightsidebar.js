import Image from 'next/image'
const RightSidebar = () => {
  return (
    <div className="mt-5">
      <div className='flex justify-center'>
        <div className="flex max-72 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className='flex flex-col p-3'>
            <div>
              <p className='font-semibold'>Linkedin News</p>
              <ul className="list-disc pl-3 text-sm space-y-4 mt-3 ">
                <li>
                  <p className='font-semibold'>Top 25 companies of India this year</p>
                  <p className='text-xs'>Top News • 34,825 readers</p>
                </li>
                <li>
                  <p className='font-semibold'>Google cuts jobs in AI push</p>
                  <p className='text-xs'>4h ago • 81  ,825 readers</p>
                </li>
                <li>
                  <p className='font-semibold'>Startups tap B-school talent</p>
                  <p className='text-xs'>23h ago • 94,825 readers</p>
                </li>
                <li>
                  <p className='font-semibold'>Indian brands win Gen Z hearts</p>
                  <p className='text-xs'>1d ago • 14,825 readers</p>
                </li>
                <li>
                  <p className='font-semibold'>Decoding IT trends of India</p>
                  <p className='text-xs'>2d ago • 64,825 readers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar