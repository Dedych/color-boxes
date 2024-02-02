import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLock } from "@fortawesome/free-solid-svg-icons";

export const LockColorButton = ({ clickColorLock, colorButton }) => {
  return (
    <div className="wrapper-lock-button">
      <button
        className="button--lock"
        style={colorButton}
        onClick={clickColorLock}
      >
        <FontAwesomeIcon icon={faLock} />
      </button>
    </div>
  );
};
