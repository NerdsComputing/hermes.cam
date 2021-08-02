import React from 'react'
import PropTypes from 'prop-types'
import { Content as Loading } from 'loading/content'
import { useFetching } from 'settings/hooks/use-fetching'

export const Settings = ({ children }) => {
  const wereFetched = useFetching()

  return wereFetched ? children : <Loading />
}

Settings.propTypes = { children: PropTypes.node.isRequired }

export { settings } from 'settings/fetching'
