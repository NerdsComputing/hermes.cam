import React from 'react'
import { Detection } from 'camera/detection'
import { useCurrentDetections } from 'camera/hooks/use-current-detections'

const styles = {
  position: 'absolute',
  color: 'yellow',
  fontWeight: 600,
  top: 0,
  left: 0,
}

export const Detections = () => {
  const detections = useCurrentDetections()

  return <div style={styles}>
    {
      detections.map((item, index) => <Detection data={item} key={index} />)
    }
  </div>
}
