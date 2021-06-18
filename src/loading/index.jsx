import React from 'react'

import { style } from 'loading/style'
import { useShouldShow } from 'loading/hooks/use-should-show'

export const Loading = () => useShouldShow() && <div style={style}>
  ...
</div>
