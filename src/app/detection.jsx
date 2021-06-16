import React from "react";

const makeStyles = ([left, top, right, _bottom]) => ({
  position: "absolute",
  left: left + (right - left) / 2,
  top: top,
})

export const Detection = ({data}) => <div style={makeStyles(data.bbox)}>
  {data.class}
</div>
