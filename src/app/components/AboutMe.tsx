/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="flex flex-col lg:flex-row lg:p-32 my-10 lg:my-20 text-white">
        <div className="w-full lg:w-1/2 p-6 ">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-10">About <strong className="text-[#00ADB5]">Me</strong></h1>
          <p className="text-lg lg:text-2xl w-full lg:w-5/6 m-auto lg:font-semibold">
          Electrical Engineer | Fullstack Developer | Frontend Specialist <br />
<br />
          As an electrical engineer with a deep-seated passion for coding and technology, I have effectively merged my engineering expertise with advanced software development skills. My strong foundation in electrical engineering has seamlessly transitioned into the realm of programming, where I specialize in Python and React development and Fullstack technologies. Over the past few years, I have honed my abilities in these areas, leveraging my technical background to build robust and efficient solutions.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 bg-[url('../../public/pic2.png')] bg-cover bg-center min-h-[550px]">
          <Image className="m-auto" src="/man.png" alt="" width={500} height={100}/>
        </div>
      </div>
    </>
  );
}
