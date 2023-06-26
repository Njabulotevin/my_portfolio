import React from "react";

export default function page() {
  const projects = [
    {
      name: "Uzoori social media",
      thumbnail: "/uzoori_thumbnail.jpg",
      tech: ["NextJs"],
      details:
        "Uzoori is a social commerce app that allows users to discover new styles and trends in the beauty and food industries",
    },
  ];
  return (
    <div className="lg:p-20 lg:pt-[50px] min-h-screen">
      <section className="flex flex-col gap-20 px-10 lg:px-20 py-36">
        <h2 className="text-4xl font-semibold gradientText">My projects</h2>
        <div className="flex flex-wrap gap-5">
          {projects.map((project, i) => {
            return (
              <div key={i} className="flex flex-col gap-3 max-w-[300px]">
                <img
                  src={project.thumbnail}
                  className="object-cover w-[300px] h-[180px] rounded-lg"
                />
                <h4 className="text-white font-semibold">{project.name}</h4>
                <p className="text-white text-sm">{project.details}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
