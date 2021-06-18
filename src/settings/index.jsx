import {Loading} from "../loading";
import {useFetching} from "./hooks/use-fetching";
import {useSettings} from "./hooks/use-settings";

export const Settings = ({children}) => {
  useFetching()

  return useSettings() ? children : <Loading/>
}
