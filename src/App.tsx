import * as React from "react"

import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { 	Route, Routes } from "react-router-dom"
import { Login } from "./Components/Login";
import NotFound from "./Components/notFound";
import { Tabela } from "./Components/Tabela";

export const App = () => {

  return(
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Tabela/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
			
    </ChakraProvider>
  )
}

export default App;
