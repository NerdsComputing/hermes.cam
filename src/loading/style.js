const sizeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
}

const alignmentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const style = {
  ...sizeStyle,
  ...alignmentStyle,

  background: 'white',
  zIndex: 99999,
  fontWeight: 600
}
