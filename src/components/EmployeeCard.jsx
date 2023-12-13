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
          <img
            src={img}
            className="w-full h-full rounded-full bg-center object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">{name} </h1>
          <p className="text-sm">
            {job},{age}
          </p>

          {/* Button Edit */}
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-sm max-w-[80px] text-center"
            onClick={handleOpenModal}
          >
            Edit
          </button>

          {/* Form */}

          <ButtonEdit isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl mb-4">Update Profile</h2>
              <form className="flex flex-col gap-4 items-start">
                <input
                  type="text"
                  placeholder="Fullname"
                  className="outline-none border border-slate-500 p-2 rounded-sm"
                />
                <input
                  type="text"
                  placeholder="Profession"
                  className="outline-none border border-slate-500 p-2 rounded-sm"
                />
                <div className="flex items-center justify-center gap-4 border-t">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-sm mt-4"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>

                  <button className="bg-blue-500 text-white px-4 py-2 rounded-sm mt-4">
                    Update
                  </button>
                </div>
              </form>
            </div>
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
