import React from 'react'
import { Network } from 'network'
import PropTypes from 'prop-types'
import { Settings } from 'settings'

export const Configs = ({ children }) => <Settings>
  <Network>
    {children}
  </Network>
</Settings>

Configs.propTypes = { children: PropTypes.node.isRequired }
