import PropTypes from "prop-types";

const Employees = ({ name, job }) => {
  return (
    <div>
      <h1>{name}</h1>
      {job ? <p>{job}</p> : <p>Job less</p>}
    </div>
  );
};

Employees.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
};

export default Employees;
