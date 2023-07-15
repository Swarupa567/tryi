import React from 'react'
import { useMemo } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  Table  from '../components/dataTable/dataTable';
import ErrorBoundary from '../pages/_error';

function App() {
  return (
    <ChakraProvider>
        <ErrorBoundary>
        <Table />
        </ErrorBoundary>
    </ChakraProvider>
  )
}

export default App;