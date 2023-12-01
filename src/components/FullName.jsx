const FullName = () => {
  const fullName = {
    firstName: "Jerick",
    lastName: "Malungcut",
  };

  const showFullName = (name) => {
    return name.firstName + name.lastName;
  };

  return (
    <div>
      <h1>{showFullName(fullName)}</h1>
    </div>
  );
};

export default FullName;
