import React from "react";
import "./index.css";

function App() {
  const blogPosts = [
    {
      title: "Integrating Azure DevOps with .NET Projects",
      date: "March 2024",
      link: "#",
    },
    {
      title: "Optimizing SQL Server Performance for Enterprise Apps",
      date: "February 2024",
      link: "#",
    },
  ];

  const projects = [
    {
      name: "Inventory Management System",
      tech: "React, .NET Core, SQL Server",
      link: "#",
    },
    {
      name: "Employee Portal",
      tech: "ASP.NET MVC, Azure AD, REST API",
      link: "#",
    },
  ];
  return (
    <div className="App">
      {/* Parallax 1 */}
      <div
        className="h-screen bg-fixed bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870620-1c68ef261c6a')",
        }}
      >
        <div className="text-center backdrop-blur-sm bg-black/30 p-8 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Sanath Kumar</h1>
          <p className="text-xl">
            Senior Software Developer | Full Stack .NET Expert
          </p>
        </div>
      </div>

      {/* About */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Over 8 years of experience in software development using .NET
          technologies, Azure, and DevOps.
        </p>
      </section>

      {/* Parallax 2 - Skills */}
      <div
        className="h-screen bg-fixed bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
        }}
      >
        <div className="text-center backdrop-blur-sm bg-black/30 p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <ul className="flex justify-center space-x-6">
            <li className="flex items-center space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                alt="C#"
                className="w-8"
              />
              <span>C#</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                alt=".NET"
                className="w-8"
              />
              <span>.NET</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JS"
                className="w-8"
              />
              <span>JavaScript</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <div className="flex items-center justify-center space-x-6">
          <img
            src="https://api.badgr.io/public/assertions/1qEbsVAyRxmwkKY1q7mYZw/image"
            alt="Scrum Master"
            className="w-20"
          />
          <div className="text-left">
            <p className="font-semibold">
              Certified Scrum Master - Scrum Alliance
            </p>
            <a
              href="https://bcert.me/sltwhxreg"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              View Badge
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <a
                href={post.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md hover:shadow-xl transition text-left"
            >
              <h3 className="text-xl font-bold">{proj.name}</h3>
              <p className="text-gray-600">{proj.tech}</p>
              <a
                href={proj.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax 3 - Contact */}
      <div
        className="h-screen bg-fixed bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508923567004-3a6b8004f3d1')",
        }}
      >
        <div className="text-center backdrop-blur-sm bg-black/30 p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-2">Thank You</h2>
          <p className="text-lg">Contact: sanath.kumar@email.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
