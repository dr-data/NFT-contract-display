import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'

import customTheme from "../utils/theme";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
