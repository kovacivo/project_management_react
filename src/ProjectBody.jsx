import logo from './assets/no-projects.png';
import { useState } from 'react';





export default function ProjectBody({ project }) {

  function handleCreateProject() {
    console.log("Pressing button to create new project...");
    setClickedNewProject(true);
  }

  function handleSaveButton(){
    console.log("Pressing button to save project data...");
  }

  const [clickedNewProject, setClickedNewProject] = useState(false);

  let contentToDisplay = null;

  if (project != null) {
    contentToDisplay = <><p>project content</p><p>{project.name}</p></>;
  } else if (clickedNewProject === true) {
    contentToDisplay = <>
      <div className="justify-self-end mr-64">
        <button className="text-stone-800 hover:bg-stone-800 hover:text-slate-50 rounded-lg text-xl p-4">Cancel</button>
        <button
          className="text-stone-800 hover:bg-stone-800 hover:text-slate-50 rounded-lg text-xl p-4"
          onClick={handleSaveButton}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col mr-64">
        <label className="font-bold text-stone-600 pt-5">TITLE</label>
        <input className="bg-stone-300 pt-2 pb-2 rounded-sm text-lg" type="text" placeholder="Put project name here..." />
        <label className="font-bold text-stone-600 pt-5">DESCRIPTION</label>
        <textarea className="bg-stone-300 pt-2 pb-2 rounded-sm text-lg" type="text" />
        <label className="font-bold text-stone-600 pt-5">DUE DATE</label>
        <input className="bg-stone-300 pt-2 pb-2  rounded-sm text-lg active:rounded-b-lg" type="date" />
      </div>
    </>;
  } else {
    contentToDisplay = <div className=" align-middle justify-items-center">
      <img src={logo} width={80} height={80} alt='logo' />
      <h3 className="text-stone-800 font-bold text-2xl mt-5 mb-5">No Project Selected</h3>
      <h3 className="text-stone-400 font-medium text-xl mb-5">Select a project or get started with a new one</h3>
      <button
        className="bg-stone-800 rounded-lg text-stone-400 text-xl p-3 mt-3"
        onClick={handleCreateProject}>Create new project</button>

    </div>;
  }

  return (
    <div className="w-3/4">
      <div className="mt-32">
        {contentToDisplay}
      </div>
    </div>
  );
}