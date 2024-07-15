"use client"
import Image from "next/image";

export default function Banner(){
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center"});
        }
      };
      const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = './CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <>
            <div id="banner" className="flex flex-col lg:flex-row lg:flex lg:justify-center text-white min-h-[800px] bg-[url('../../public/pic2.png')] mt-20">
                <div className="lg:w-1/2 mx-auto mb-10 flex justify-center lg:flex lg:justify-end">
                    <Image className="lg:w-1/2 my-auto border-2 border-[#00ADB5] rounded-full" src="/me.png" alt="mypic" width={550} height={550} />
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start lg:w-2/3 py-10 lg:py-0 lg:ml-10  ">
                    <h1 className="text-4xl lg:text-6xl text-center lg:text-left pb-5">
                    <strong className="text-[#00ADB5]">S</strong>eyed
                    <strong className="text-[#00ADB5]"> M</strong>eysam
                    <strong className="text-[#00ADB5]"> M</strong>ir
                    <strong className="text-[#00ADB5]"> H</strong>osseini</h1>
                    <h3 className="text-2xl lg:text-4xl text-center lg:text-left mb-5 lg:mb-10">Junior Fullstack Developer</h3>
                    <div className="flex flex-col lg:flex-row items-center">
                    <button className="bg-[#00ADB5] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full mb-3 lg:mb-0 mr-0 lg:mr-5 transition duration-500 ease-in-out hover:bg-gray-500" onClick={()=>scrollToSection("contact")}>Hire Me</button>
                    <button className="text-black bg-white px-6 py-3 lg:px-8 lg:py-4 rounded-full transition duration-500 ease-in-out hover:bg-gray-500" onClick={handleDownloadCV}>Download CV</button>
                    </div>
                </div>
            </div>
        </>
    )
}