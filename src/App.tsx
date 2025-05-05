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
            "url('https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            "url('https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            src="data:image/png;base64,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"
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
