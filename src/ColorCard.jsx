import { ColorBox } from "./ColorBox";
import { LockColorButton } from "./LockColorButton";

export const ColorCard = ({
  clickColorLock,
  styleBox,
  colorButton,
  descriptionClrBox,
}) => {
  return (
    <div className="color-card">
      <ColorBox descriptionClrBox={descriptionClrBox} styleBox={styleBox} />
      <LockColorButton
        colorButton={colorButton}
        clickColorLock={clickColorLock}
      />
    </div>
  );
};
