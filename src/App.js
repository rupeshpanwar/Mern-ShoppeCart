import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import './bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1> Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
