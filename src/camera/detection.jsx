import React from 'react'
import PropTypes from 'prop-types'

const makeStyles = ([left, top, right, _bottom]) => ({
  position: 'absolute',
  left: left + (right - left) / 2,
  top,
})

export const Detection = ({ data }) => <div>
  {`${data.class} ${data.score}`}
</div>

Detection.propTypes = { data: PropTypes.object.isRequired }
