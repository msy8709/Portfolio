import Main from './Page/Main';
import { Route ,Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
