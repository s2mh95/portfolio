"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

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
            <div className="flex justify-between items-center">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 1
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 2
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 3
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 4
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 5
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 6
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 7
                </div>
            </div>
            <div className="flex justify-between items-center m-auto">
                <div className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 bg-gray-400 opacity-60 hover:opacity-80">
                    <Image className="m-auto" src="/p.png" alt="mypic" width={300} height={100} />
                    Project 8
                </div>
            </div>
        </Slider>
        </div>
  );
}
