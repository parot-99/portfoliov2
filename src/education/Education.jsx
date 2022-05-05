import styles from './Education.module.css'

const Education = () => {
  return (
    <section id={styles.education}>
      <header className="section-header">
        <h2>Education</h2>
      </header>
      <p>Ankara University</p>
      <p>BSc Computer Engineering</p>
      <p>GPA: 3.61</p>
    </section>
  )
}

export default Education
