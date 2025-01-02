import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cofe1 from './Cards/Cofe1';
import Cofe3 from './Cards/Cofe2';
import Choy from './Cards/Choy';
import Cofe2 from './Cards/Cofe';


function Coffe() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <style>
                {`
          .slick-prev:before, .slick-next:before {
            color: black; 
          }
        `}
            </style>
            <div className="flex justify-between py-5 items-end ">
                <h1 className='font-semibold text-2xl '>Выгодная полка</h1>
                <a href="#" className='text-[#3A692F] font-bold'>Больше товаров по акции</a>
            </div>

            <Slider {...settings}>
                <div>
                    <Cofe1 />
                </div>
                <div>
                    <Cofe3 />
                </div>
                <div>
                    <Choy />
                </div>
                <div>
                    <Cofe2 />
                </div>
            </Slider>
        </>
    )
}

export default Coffe