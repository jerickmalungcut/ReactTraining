import PropTypes from "prop-types";

const ButtonEdit = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div className="bg-white p-8 rounded shadow-lg z-10">{children}</div>
        </div>
      )}
    </>
  );
};

ButtonEdit.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonEdit;
