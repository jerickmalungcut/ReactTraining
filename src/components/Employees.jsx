import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import data from "../constants";

const Employees = () => {
  const [details, setDetails] = useState(data);

  const showEmployee = true;

  return (
    <>
      {showEmployee ? (
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          {details.map((item, index) => (
            <EmployeeCard
              key={index}
              name={item.name}
              job={item.job}
              age={item.age}
              img={item.img}
            />
          ))}
        </div>
      ) : (
        <h1>No employees found</h1>
      )}
    </>
  );
};

export default Employees;
