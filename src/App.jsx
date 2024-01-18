import ProjectsSidebar from "./conponents/ProjectsSidebar.jsx";
import NewProject from "./conponents/NewProject.jsx";

function App() {
  return (
    <>
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar/>
            <NewProject/>
        </main>
    </>
  );
}

export default App;
