import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { ContainerGeralStyle } from './style'

// import './global.css'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ContainerGeralStyle>
        <ListaVagas />
      </ContainerGeralStyle>
    </>
  )
}

export default App
