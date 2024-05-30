import {
  BrowserRouter,
  Navigate,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom'

import { Home } from '../presentation/pages/Home'

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path='*' element={<Navigate to="/" replace />} />
        <Route path="/" Component={Home} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
