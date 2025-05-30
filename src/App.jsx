import ProjectBody from "./ProjectBody";
import ProjectMenu from "./ProjectMenu";
import { useState, useRef, StrictMode } from "react";

function App() {

  // const projects = [
  //   // { 'title':'project #1', 'description':'description for $$$1', 'dueDate':'11/11/2016' },
  //   // { 'title':'project #2', 'description':'description for $$$2', 'dueDate':'11/12/2016' },
  //   // { 'title':'project #3', 'description':'description for $$$3', 'dueDate':'11/13/2016' },
  // ]
  const [projects, setProjects] = useState([]);
  const formRef = useRef();

  const handleSubmit = (data) => {
    console.log('Form Submitted with Data:', data);
    projects.push(data);

    setProjects([...projects], projects.push(data))
    //alert(`Form submitted with: ${JSON.stringify(data)}`);
    console.log("In projects: {}", projects);
  };

  return (
    <StrictMode>
      <div className="h-11 bg-slate-50"></div>
      <div className="flex gap-12">
        <ProjectMenu projects={projects} />
        <ProjectBody
          project={projects[0]}
          ref={formRef}
          onSubmit={handleSubmit}
        />
      </div>
    </StrictMode>
  );
}

export default App;