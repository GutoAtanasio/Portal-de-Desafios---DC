import { useState } from "react"
import Tasks from "./components/Tasks"
import { SideBar } from "./components/SideBar";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar JS",
      description: "Estudar programação para se tornar um desenvolvedor JS.",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar react",
      description: "Estudar programação para se tornar um desenvolvedor react.",
      isCompleted: false
    },
  ]);


  return (
    <>
    <div className="container flex w-full h-full max-w-screen mx-auto">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full ">
        <header className="bg-gradient-to-r from-[#C43A00] via-[#C82627] to-[#C18900] text-white h-60 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Course OS</h1>
        <h2 className="text-sm">Plataforma de curso aberto desenvolvida no Hackathon.</h2>
        <button className="bg-white text-black rounded-md px-4 py-2">ENTRAR</button>
      </header>

      <section className="bg-[#101828] text-white h-full">
        <div className="flex justify-between items-center p-4">
          <h1>Conteúdo</h1>
          <h2 className="text-xs">3 LESSONS</h2>
        </div>
        <hr />
        <div>
          <Tasks tasks={tasks} />
        </div>
      </section>
    </div>
      </div>
      


    </>
  )
}

export default App
