import { useFingerprint } from 'camera/hooks/use-fingerprint'

export const useShouldFetch = () => {
  const fingerprint = useFingerprint()

  return !!fingerprint
}
