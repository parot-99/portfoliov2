import Contact from './Contact'
import styles from './About.module.css'

const About = () => {
  return (
    <section id={styles.about}>
      <header className="section-header">
        <h2>About</h2>
      </header>
      <section className="split-container">
        <p>
          Goal-oriented, creative, and motivated Computer Engineer. During my
          bachelors, I worked on many side projects that taught me more about
          the software life cycle and the newest technologies and tools used.
        </p>
        <Contact />
      </section>
    </section>
  )
}

export default About
