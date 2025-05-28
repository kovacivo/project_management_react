export default function ProjectMenu({projects}) {

  const projectsActual = projects.map((proj) => <li key={proj.id} className="pt-2 pb-2">
    <span className="text-stone-400 text-xl">{proj.name}</span></li>);

  function handleAddProject() {
    console.log("Pressing Add Project button");
  }

  return (
    <div className="w-1/4 bg-stone-800 min-h-screen rounded-tr-2xl flex-row text-justify">
      <div className="mt-12 ml-12">
        <p className="text-white font-bold text-2xl">YOUR PROJECTS</p>
        <button onClick={handleAddProject} className="mt-6 bg-stone-600 p-4 rounded-lg">
          <span className="hover:text-white text-stone-400 text-xl">+ Add Project</span>
        </button>

        <section className="mt-12  mr-12">
          <ul>
            {projectsActual}
          </ul>
          

        </section>

      </div>
    </div>
  );
}