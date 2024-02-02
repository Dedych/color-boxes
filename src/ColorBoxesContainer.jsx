import { ColorCard } from "./ColorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { getColors } from "./thunk/getColors";
import { useDispatch, useSelector } from "react-redux";
import { setBoxColorChangeStatus } from "./slices/colorbox";

export const ColorBoxesContainer = () => {
  const colorArray = useSelector((state) => state.colorbox.colorsArray);
  const dispatch = useDispatch();

  const handleClickColorGet = () => {
    dispatch(getColors());
  };
  useEffect(() => {
    dispatch(getColors());
  }, [dispatch]);

  return (
    <div className="wrapper-color-cards">
      <div className="container-content">
        <ul className="color-cards-list">
          {colorArray.map((_, i) => {
            return (
              <li className="color-cards-list-item" key={i}>
                <ColorCard
                  descriptionClrBox={colorArray[i].title}
                  colorButton={{
                    backgroundColor: `${colorArray[`${i}`].lockColor}`,
                  }}
                  clickColorLock={() => {
                    dispatch(setBoxColorChangeStatus({ id: `cl-${i}` }));
                  }}
                  styleBox={{
                    backgroundColor: `rgb(${colorArray[`${i}`].color.join(
                      `,`
                    )})`,
                  }}
                />
              </li>
            );
          })}
        </ul>

        <div className="wrapper-btn-cl-ch">
          <button
            className="button--color-change"
            onClick={handleClickColorGet}
          >
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
