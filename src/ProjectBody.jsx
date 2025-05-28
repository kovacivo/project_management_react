import logo from './assets/no-projects.png';

function handleCreateProject(){
  console.log("Pressing button to create new project...");
}

export default function ProjectBody({ projects }) {
  return (
    <div className="w-3/4">
      <div className="flex-row mt-32">
        <div className=" align-middle justify-items-center">
          <img src={logo} width={80} height={80} alt='logo' />
          <h3 className="text-stone-800 font-bold text-2xl mt-5 mb-5">No Project Selected</h3>
          <h3 className="text-stone-400 font-medium text-xl mb-5">Select a project or get started with a new one</h3>
          <button className="bg-stone-800 rounded-lg text-stone-400 text-xl p-3 mt-3" onClick={handleCreateProject}>Create new project</button>

        </div>
      </div>
    </div>
  );
}