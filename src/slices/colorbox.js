import { createSlice } from "@reduxjs/toolkit";

export const colorboxSlice = createSlice({
  initialState: {
    colorsArray: [
      {
        id: "cl-0",
        color: [0, 0, 0],
        changeable: true,
        lockColor: "#22c016",
        title: "RGB(0,0,0)",
      },
      {
        id: "cl-1",
        color: [0, 0, 0],
        changeable: true,
        lockColor: "#22c016",
        title: "RGB(0,0,0)",
      },
      {
        id: "cl-2",
        color: [0, 0, 0],
        changeable: true,
        lockColor: "#22c016",
        title: "RGB(0,0,0)",
      },
      {
        id: "cl-3",
        color: [0, 0, 0],
        changeable: true,
        lockColor: "#22c016",
        title: "RGB(0,0,0)",
      },
      {
        id: "cl-4",
        color: [0, 0, 0],
        changeable: true,
        lockColor: "#22c016",
        title: "RGB(0,0,0)",
      },
    ],
  },
  name: "colorbox",

  reducers: {
    setBoxColor: (state, { payload }) => {
      state.colorsArray.forEach((item, index) => {
        if (item.changeable) {
          item.color = payload[index];
          item.title = `RGB(${item.color.join(`,`)})`;
        }
      });
    },

    setBoxColorChangeStatus: (state, { payload }) => {
      state.colorsArray.forEach((item) => {
        if (item.id === payload.id) {
          if (item.lockColor === "#c01616") {
            item.lockColor = "#22c016";
          } else item.lockColor = "#c01616";
          item.changeable = !item.changeable;
        }
      });
    },
  },
});

export const { setBoxColor, setBoxColorChangeStatus } = colorboxSlice.actions;
