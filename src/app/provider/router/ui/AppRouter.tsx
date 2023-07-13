import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader/index'

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path as string}
            path={route.path as string}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter