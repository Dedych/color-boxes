import { useDispatch, useSelector } from "react-redux";

export const ColorBox = ({ styleBox, descriptionClrBox }) => {
  return (
    <div style={styleBox} className="color-box">
      <div className="wrapper-description-clr-box">
        <p children={descriptionClrBox} className="description-clr-box" />
      </div>
    </div>
  );
};
