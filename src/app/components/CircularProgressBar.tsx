
const CircularProgressBar = ({ progress }:any) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-40 h-40" viewBox="-10 -10 100 100">
      <circle
        className="  "
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="20"
        fill="none"
      />
      <circle
        className=" stroke-current text-[#00ADB5]"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="15"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="51%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        className="text-sm font-semibold"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;

