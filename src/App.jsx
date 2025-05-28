import ProjectBody from "./ProjectBody";
import ProjectMenu from "./ProjectMenu";
import { useState, StrictMode } from "react";

function App() {

  const projects = [
    // { 'id':1,'name': 'project #1' },
    // { 'id':2,'name': 'project #2' },
    // { 'id':3, 'name': 'project #3' },
  ]
  //const [projects, setProjects] = useState();

  return (
    <StrictMode>
      <div className="h-11 bg-slate-50"></div>
      <div className="flex gap-12">
        <ProjectMenu projects={projects} />
        <ProjectBody project={projects[0]} />
      </div>
    </StrictMode>
  );
}

export default App;
