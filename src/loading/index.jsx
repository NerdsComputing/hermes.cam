import { style } from './style'
import { useShouldShow } from './hooks/use-should-show'

export const Loading = () => useShouldShow() && <div style={style}>
  ...
</div>
