import './App.css'
import 'winbox/dist/css/winbox.min.css'
import { Header, Body } from './base'
import { About } from './about'
import { Projects } from './projects'
import { Education } from './education'
import { Skills } from './skills'

const App = () => {
  return (
    <>
      <Header />
      <Body>
        <About />
        <section className="split-container">
          <Projects />
          <Education />
        </section>
        <Skills />
      </Body>
    </>
  )
}

export default App
