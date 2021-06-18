import React from 'react'
import PropTypes from 'prop-types'

import { Loading } from 'loading'
import { useFetching } from 'settings/hooks/use-fetching'
import { useSettings } from 'settings/hooks/use-settings'

export const Settings = ({ children }) => {
  useFetching()

  return useSettings() ? children : <Loading />
}

Settings.propTypes = { children: PropTypes.node.isRequired }
