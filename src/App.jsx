import Employees from "./components/Employees";
import FullName from "./components/FullName";

function App() {
  const showEmployee = true;

  return (
    <div className="bg-slate-800 text-white h-screen w-full flex flex-col justify-center items-center">
      <h1>Hello World!</h1>
      {showEmployee ? (
        <>
          <Employees name="Jerick Malungcut" job="Web Dev" />
          <Employees />
          <Employees />
          <Employees />
        </>
      ) : (
        <h1>No employees found</h1>
      )}

      <FullName />
    </div>
  );
}

export default App;
