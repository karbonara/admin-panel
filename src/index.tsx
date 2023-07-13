import App from './app/App'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './app/provider/ErrorBoundary/index'
import { StoreProvider } from 'app/provider/StoreProvider'

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)