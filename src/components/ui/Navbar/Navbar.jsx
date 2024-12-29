import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <section>
        <div className="flex items-center">
          <a href="#" className='flex items-center gap-2'>
            <img src="./logo.png" alt="Logo" className='w-[77px]' />
            <h1 className='w-[162px] text-[14px] text-center text-[#3A692F] font-bold'>Быстрая доставка еды
              для Вашего стола! </h1>
          </a>
          <header>
            <div className="relative w-40">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 py-2 px-[500px] border bg-white border-[#3A692F] rounded-2xl focus:outline-none"
              />
            </div>
            <button>Укажите адрес доставки</button>
          </header>
        </div>
      </section>
    </>
  )
}

export default Navbar