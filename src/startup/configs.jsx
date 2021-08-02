import { Network } from 'network'
import { Settings } from 'settings'

export const Configs = ({children}) => <Settings>
  <Network>
    {children}
  </Network>
</Settings>
