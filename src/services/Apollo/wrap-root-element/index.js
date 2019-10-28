import React from 'react'
import Loadable from 'react-loadable'

const LoadableProvider = Loadable({
  loader: () => import('./provider'),
  loading: () => <div>loading...</div>,
})

export const wrapRootElement = ({ element }) => {
  return <LoadableProvider element={element} />
}
