import { useState } from "react";
import PropTypes from "prop-types";
import ButtonEdit from "./ButtonEdit";

const EmployeeCard = ({ name, job, age, img }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="bg-white text-slate-800 min-w-[350px] min-h-[100px] flex justify-center items-center gap-6 rounded-xl shadow-lg py-4">
        <div className="w-[100px] h-[100px] rounded-full">
          <img src={img} className="rounded-full bg-cover" />
        </div>
        <div>
          <h1 className="text-lg font-bold">{name} </h1>
          <p className="text-sm">
            {job},{age}
          </p>

          {/* Button Edit */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleOpenModal}
          >
            Open Modal
          </button>

          <ButtonEdit isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2 className="text-2xl mb-4">Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleCloseModal}
            >
              Close Modal
            </button>
          </ButtonEdit>
        </div>
      </div>
    </>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  age: PropTypes.number,
  img: PropTypes.string,
};

export default EmployeeCard;
