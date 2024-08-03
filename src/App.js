import Main from './Page/Main';
import AboutMe from './Page/about/AboutMe';
import Tech from './Page/Tech';
import Nav from './Component/Nav';
import Experience from './Page/Experience';
import Archiving from './Page/Archiving';
import Project from './Page/Project';
function App() {
  return (
  <div>
    <Nav />
    <Main />
    <AboutMe />
    <Tech />
    <Archiving />
    <Project />
  </div>
  )
}

export default App;
