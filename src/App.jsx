import Employees from "./components/Employees";
import FullName from "./components/FullName";
import InputValue from "./components/InputValue";
import data from "./constants";

function App() {
  const showEmployee = true;

  return (
    <div className="bg-slate-800 text-white h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">Hello World!</h1>
      {showEmployee ? (
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white text-slate-800 min-w-[350px] min-h-[100px] flex justify-center items-center gap-6 rounded-xl shadow-lg py-4"
            >
              <div className="w-[100px] h-[100px] rounded-full">
                <img src={item.img} className="rounded-full bg-cover" />
              </div>
              <div>
                <h1 className="text-lg font-bold">{item.name} </h1>
                <p className="text-sm">
                  {item.job},{item.age}
                </p>

                <button>Edit</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No employees found</h1>
      )}

      <InputValue />

      <FullName />
    </div>
  );
}

export default App;
