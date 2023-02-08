import GlobalStyle from './styles/globalStyles'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import Events from './pages/Events'
import Drivers from './pages/Drivers'
import Teams from './pages/Teams'
import Tools from './pages/Tools'
import Pits from './pages/Pits'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/events' element={<Events />} />
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/pits' element={<Pits />} />
      </Routes>
    </>
  )
}

export default App
