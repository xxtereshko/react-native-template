import { Home } from '@pages/home'
import { useCachedResources } from '@shared/hooks'
import { ThemeProvider } from '@shared/theme'

export const App = () => {
  const isResourcesLoaded = useCachedResources()

  if (!isResourcesLoaded) {
    return null
  }

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}
