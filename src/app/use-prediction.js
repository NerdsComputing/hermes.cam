import {combineLatest} from "rxjs";
import {useEffect} from "react";
import {useContext} from "./context";
import {mergeMap, map} from "rxjs/operators";
import {repository} from "./repository";
import {useCoroutine} from "./use-coroutine";

export const usePrediction = () => {
  const {camera} = useContext()
  const startPrediction = useCoroutine()

  useEffect(() => {
    const subscription = combineLatest([repository.camera(camera), repository.model()])
      .pipe(map(([_, model]) => model))
      .pipe(mergeMap(startPrediction))
      .subscribe()

    return () => subscription.unsubscribe()
  }, [])
}
