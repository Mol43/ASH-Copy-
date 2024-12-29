import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { LiaTelegram } from "react-icons/lia";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer>
                <section>
                    <div className="flex justify-center gap-20 items-center bg-[#F2F2F2] py-10 rounded-2xl rounded-b-none">
                        <div className="">
                            <span className='font-semibold text-[#3A692F] text-[28px]'>Быстрая доставка еды<br />
                                <span className='font-bold'>для Вашего стола!</span>
                            </span>
                        </div>
                        <img src="./logo.png" alt="" />
                        <div className="">
                            <p className='text-[22px] text-[#3A692F]'>Разнообразие — наше все</p>
                            <div className="relative">
                                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 w-[300px] border bg-white border-[#3A692F] rounded-2xl focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#3A692F] p-20 rounded-2xl rounded-b-none">
                        <div className="flex gap-8 justify-center items-center">
                            <p className='text-[#F2F2F2]'>© ASH 2024</p>
                            <a href="#" className='text-white'>Доставка и оплата</a>
                            <a href="#" className='text-white'>Поставщикам и партнёрам</a>
                            <a href="#" className='text-white'>Пользовательское соглашение</a>
                            <a href="#" className='text-white'>Контакты</a>
                            <div className="flex gap-4">
                                <a href="#" className='p-2 rounded-2xl  bg-[#E9F3E2]'>
                                    <FaInstagram />
                                </a>
                                <a href="#" className='p-2 rounded-2xl  bg-[#E9F3E2]'>
                                    <LiaTelegram />
                                </a>
                                <a href="#" className='p-2 rounded-2xl  bg-[#E9F3E2]'>
                                    <SiWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer