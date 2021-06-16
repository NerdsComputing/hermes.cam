import React from "react";

import {useContext} from "./context";
import {Detection} from "./detection";

const styles = {
  position: 'absolute',
  color: 'yellow',
  fontWeight: 600,
  top: 0,
  left: 0
}

export const Detections = () => {
  const {objects} = useContext()

  return <div style={styles}>
    {
      objects.map((item, index) => <Detection data={item} key={index}/>)
    }
  </div>;
}
