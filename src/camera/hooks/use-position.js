const makeRandomPosition = () => ({
  longitude: Math.random(),
  latitude: Math.random(),
})

const makeSuccess = setPosition => ({ coords }) => {
  setPosition({ longitude: coords.longitude, latitude: coords.latitude })
}

const makeFailure = setPosition => () => {
  setPosition(makeRandomPosition())
}

export const usePosition = setPosition => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeSuccess(setPosition), makeFailure(setPosition))
  } else {
    setPosition(makeRandomPosition())
  }
}
