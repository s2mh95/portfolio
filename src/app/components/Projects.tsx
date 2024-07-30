"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    const settings = {
        autoplay:true,
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
                autoplay:true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                infinite: true,
              }
            }]
    }
    return (
        <div id='projects' className="slider-container items-center text-center py-10 my-20 skills bg-[url('../../public/pic2.png')] mx-10 h-[600px] text-white">
            <h1 className='text-5xl font-bold'>Project</h1>
        <Slider {...settings}>
            <Link href="https://lucent-panda-03a078.netlify.app/" className="flex justify-between items-center">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 h-96 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto " src="/ecommerce.png" alt="mypic" width={300} height={100} />
                    eCommerce
                </div>
            </Link>
            <Link href="https://spectacular-heliotrope-31b851.netlify.app/" className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 h-96 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/duolingo.png" alt="mypic" width={300} height={100} />
                    Duolingo clone
                </div>
            </Link>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 h-96 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/FAICTP.png" alt="mypic" width={300} height={100} />
                    Transport Agent Management
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 h-96 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/limz.png" alt="mypic" width={300} height={100} />
                    Blood Labratoary
                </div>
            </div>
        </Slider>
        </div>
  );
}
