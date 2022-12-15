import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          INTER_REGULAR: require('../../../assets/fonts/Inter-Regular.ttf'),
          INTER_MEDIUM: require('../../../assets/fonts/Inter-Medium.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}