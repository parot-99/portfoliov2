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
          Goal-oriented, creative, and motivated Computer Scientest. During my
          bachelors, I worked on many side projects that taught me more about
          the software life cycle and the newest technologies and tools used. Futhermore, I recently finished my MSc in Artificial Intellegence for Sustainable Development, a journey that gave me more experience in AI and the latest technologies used in the industry. Nevertheless, the MSc program focused on developing projects, writing code, and providing technical reports and research papers for the related work, which further improved my writing skills.
        </p>
        <Contact />
      </section>
    </section>
  )
}

export default About
