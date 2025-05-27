import ProjectBody from "./ProjectBody";
import ProjectMenu from "./ProjectMenu";

function App() {
  return (
    <>
    <div className="h-11 bg-slate-50"></div>
      <div className="flex gap-12">
        
        <ProjectMenu />
        
        <ProjectBody />
      </div>

    </>
  );
}

export default App;
