import Image from "next/image";

export default function Footer() { 
    return(
        <>
            <div className="flex flex-row h-32 border-t-2 justify-center pt-10 border-[#00ADB5]">
                <button><Image className="h-9 mx-2" src={"/Facebook.png"} alt="" width={40} height={10}/></button>
                <button><Image className="h-9 mx-2" src={"/Twitter.png"} alt="" width={40} height={10}/></button>
                <button><Image className="h-9 mx-2" src={"/Linkedin.png"} alt="" width={40} height={10}/></button>
                <button><Image className="h-9 mx-2" src={"/desktop.png"} alt="" width={40} height={40}/></button>
            </div>
            <div className=" justify-center flex text-lg text-[#00ADB5]">© 2024 s2mh </div>
        </>
    )
}