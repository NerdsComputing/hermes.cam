import React from 'react'
import { Content } from 'loading/content'
import { useShouldShow } from 'loading/hooks/use-should-show'

export const Loading = () => useShouldShow() && <Content />
