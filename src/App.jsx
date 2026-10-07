import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Page1 from '../src/Page/PayGe1/Page1'
import Footer from './components/Footer/Footer'
import Page2 from '../src/Page/PayGe2/Page2'
import Page3 from '../src/Page/PayGe3/Page3'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Page1/>}/>
          <Route path='/Page1' index element={<Page1/>}/>
          <Route path='/Page2' element={<Page2/>}/>
          <Route path='/Page3' element={<Page3/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
