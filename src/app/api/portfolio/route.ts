import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "portfolio.json");

// Default data structure
const defaultData = {
  banner: {
    firstName: "Seyed Meysam",
    lastName: "Mir Hosseini",
    title: "Junior Fullstack Developer"
  },
  about: {
    title: "About Me",
    description: "Electrical Engineer | Fullstack Developer | Frontend Specialist\n\nAs an electrical engineer with a deep-seated passion for coding and technology, I have effectively merged my engineering expertise with advanced software development skills. My strong foundation in electrical engineering has seamlessly transitioned into the realm of programming, where I specialize in Python and React development and Fullstack technologies. Over the past few years, I have honed my abilities in these areas, leveraging my technical background to build robust and efficient solutions."
  },
  skills: [
    { name: "PHP", progress: 80 },
    { name: "Python", progress: 90 },
    { name: "PyQt5", progress: 100 },
    { name: "Django", progress: 60 },
    { name: "Bootstrap", progress: 65 },
    { name: "React", progress: 70 },
    { name: "NextJs", progress: 55 },
    { name: "JavaScript", progress: 70 },
    { name: "Html & CSS", progress: 100 },
    { name: "Tailwind CSS", progress: 100 },
  ],
  projects: [
    { name: "eCommerce", url: "https://lucent-panda-03a078.netlify.app/", image: "/ecommerce.png" },
    { name: "Duolingo clone", url: "https://spectacular-heliotrope-31b851.netlify.app/", image: "/duolingo.png" },
    { name: "Transport Agent Management", url: "", image: "/FAICTP.png" },
    { name: "Blood Labratoary", url: "", image: "/limz.png" },
  ]
};

async function ensureDataFile() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }

  try {
    await fs.access(dataFilePath);
  } catch {
    await fs.writeFile(dataFilePath, JSON.stringify(defaultData, null, 2));
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading portfolio data:", error);
    return NextResponse.json(defaultData);
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataFile();
    const body = await request.json();
    await fs.writeFile(dataFilePath, JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving portfolio data:", error);
    return NextResponse.json(
      { success: false, message: "Error saving data" },
      { status: 500 }
    );
  }
}

