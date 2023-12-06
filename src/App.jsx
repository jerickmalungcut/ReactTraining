import Employees from "./components/Employees";
import FullName from "./components/FullName";
import InputValue from "./components/InputValue";

function App() {
  return (
    <div className="bg-slate-800 text-white h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">Hello World!</h1>

      <Employees />
      <InputValue />

      <FullName />
    </div>
  );
}

export default App;
