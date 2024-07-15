import CircularProgressBar from "./CircularProgressBar";

export default function Skills() {
    return (
        <div id="skills" className="flex flex-col items-center text-center py-10 my-20 text-white ">
            <h1 className="font-bold text-5xl">Skills</h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-2xl font-semibold items-center">
                <li className="p-10">
                    <CircularProgressBar progress={80} />
                    <div className="p-5 pr-10">PHP</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={90} />
                    <div className="p-5 pr-10">Python</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={100} />
                    <div className="p-5 pr-10">PyQt5</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={60} />
                    <div className="p-5 pr-10">Django</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={65} />
                    <div className="p-5 pr-10">Bootstrap</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={70} />
                    <div className="p-5 pr-10">React</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={55} />
                    <div className="p-5 pr-10">NextJs</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={70} />
                    <div className="p-5 pr-10">JavaScript</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={100} />
                    <div className="p-5 pr-10">Html & CSS</div></li>
                <li className="p-10">
                    <CircularProgressBar progress={100} />
                    <div className="p-5 pr-10">Tailwind CSS</div></li>
                
            </ul>
        </div>
    );
}
