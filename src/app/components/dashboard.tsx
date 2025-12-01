"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PortfolioData {
  banner: {
    firstName: string;
    lastName: string;
    title: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: Array<{
    name: string;
    progress: number;
  }>;
  projects: Array<{
    name: string;
    url: string;
    image: string;
  }>;
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioData>({
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
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/portfolio");
      if (response.ok) {
        const fetchedData = await response.json();
        setData(fetchedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const saveData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Data saved successfully!");
      } else {
        toast.error("Failed to save data");
      }
    } catch (error) {
      toast.error("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  const updateBanner = (field: string, value: string) => {
    setData({
      ...data,
      banner: { ...data.banner, [field]: value }
    });
  };

  const updateAbout = (field: string, value: string) => {
    setData({
      ...data,
      about: { ...data.about, [field]: value }
    });
  };

  const updateSkill = (index: number, field: string, value: string | number) => {
    const newSkills = [...data.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setData({ ...data, skills: newSkills });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, { name: "", progress: 0 }]
    });
  };

  const removeSkill = (index: number) => {
    const newSkills = data.skills.filter((_, i) => i !== index);
    setData({ ...data, skills: newSkills });
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setData({ ...data, projects: newProjects });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [...data.projects, { name: "", url: "", image: "" }]
    });
  };

  const removeProject = (index: number) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    setData({ ...data, projects: newProjects });
  };

  return (
    <div className="min-h-screen text-white p-8 relative">
      <ToastContainer position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#00ADB5]">Portfolio Dashboard</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={saveData}
            disabled={loading}
            className="bg-[#00ADB5] px-6 py-3 rounded-full font-bold hover:bg-[#00a0a8] transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </motion.button>
        </div>

        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900 rounded-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#00ADB5]">Banner Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                value={data.banner.firstName}
                onChange={(e) => updateBanner("firstName", e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                value={data.banner.lastName}
                onChange={(e) => updateBanner("lastName", e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                value={data.banner.title}
                onChange={(e) => updateBanner("title", e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
              />
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#00ADB5]">About Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                value={data.about.title}
                onChange={(e) => updateAbout("title", e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                value={data.about.description}
                onChange={(e) => updateAbout("description", e.target.value)}
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
              />
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-900 rounded-lg p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#00ADB5]">Skills Section</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addSkill}
              className="bg-[#00ADB5] px-4 py-2 rounded-lg text-sm font-bold"
            >
              + Add Skill
            </motion.button>
          </div>
          <div className="space-y-4">
            {data.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-4 items-end bg-gray-800 p-4 rounded-lg"
              >
                <div className="flex-1">
                  <label className="block mb-2">Skill Name</label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(index, "name", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                  />
                </div>
                <div className="w-32">
                  <label className="block mb-2">Progress (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={skill.progress}
                    onChange={(e) => updateSkill(index, "progress", parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeSkill(index)}
                  className="bg-red-600 px-4 py-2 rounded-lg font-bold"
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900 rounded-lg p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#00ADB5]">Projects Section</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addProject}
              className="bg-[#00ADB5] px-4 py-2 rounded-lg text-sm font-bold"
            >
              + Add Project
            </motion.button>
          </div>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-4 rounded-lg space-y-4"
              >
                <div>
                  <label className="block mb-2">Project Name</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(index, "name", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2">Project URL</label>
                  <input
                    type="text"
                    value={project.url}
                    onChange={(e) => updateProject(index, "url", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2">Image Path</label>
                  <input
                    type="text"
                    value={project.image}
                    onChange={(e) => updateProject(index, "image", e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                    placeholder="/image.png"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeProject(index)}
                  className="bg-red-600 px-4 py-2 rounded-lg font-bold"
                >
                  Remove Project
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

