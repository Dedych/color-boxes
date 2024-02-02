import { getColor } from "../getColor";
import { setBoxColor } from "../slices/colorbox";

export const getColors = () => async (dispatch) => {
  const data = await getColor();
  dispatch(setBoxColor(data));
};
