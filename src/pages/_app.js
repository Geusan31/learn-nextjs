import '@/styles/globals.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark'
      }}>
        <Component {...pageProps}/>
    </MantineProvider>
  )
}
