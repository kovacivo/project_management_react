import logo from './assets/no-projects.png';
import { useState, useImperativeHandle } from 'react';





export default function ProjectBody({ project, projects, onSubmit, ref }) {

  const [title,setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  console.log("ProjectBody rendered...");
  console.log("currently {} projects there...", projects.length);

   const handleFormSubmit = () => {
    if (title && description && date) {
      console.log("data is set to: {}, {} and {}", title, description, date);
      onSubmit({ title, description, date });
    } else {
      alert('Please fill in all fields!');
    }
  };

   const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
    alert('Form has been reset!');
  };
  
  function handleCreateProject() {
    console.log("Pressing button to create new project...");
    setClickedNewProject(true);
  }

  const [clickedNewProject, setClickedNewProject] = useState(false);

  let contentToDisplay = null;

  if (project != null) {
    contentToDisplay = <><p>project content</p><p>{project.title}</p></>;
  } else if (clickedNewProject === true) {
    contentToDisplay = <>
      <div className="justify-self-end mr-64">
        <button className="text-stone-800 hover:bg-stone-800 hover:text-slate-50 rounded-lg text-xl p-4"
          onClick={resetForm}>
          Cancel
        </button>
        <button
          className="text-stone-800 hover:bg-stone-800 hover:text-slate-50 rounded-lg text-xl p-4"
          onClick={handleFormSubmit}>
          Save
        </button>
      </div>
      <div className="flex flex-col mr-64">
        <label className="font-bold text-stone-600 pt-5">TITLE</label>
        <input value={title} onChange={e => setTitle(e.target.value)} className="bg-stone-300 pt-2 pb-2 rounded-sm text-lg" type="text" placeholder="Put project name here..." />
        <label className="font-bold text-stone-600 pt-5">DESCRIPTION</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} className="bg-stone-300 pt-2 pb-2 rounded-sm text-lg" type="text" />
        <label className="font-bold text-stone-600 pt-5">DUE DATE</label>
        <input value={date} onChange={e => setDate(e.target.value)} className="bg-stone-300 pt-2 pb-2  rounded-sm text-lg active:rounded-b-lg" type="date" />
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

    // Exposing the resetForm function to the parent via useImperativeHandle
  useImperativeHandle(ref, () => ({
    resetForm,
  }));

  return (
    <div className="w-3/4">
      <div className="mt-32">
        {contentToDisplay}
      </div>
    </div>
  );
}