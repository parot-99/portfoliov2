import styles from './Education.module.css'

const Education = () => {
  return (
    <section id={styles.education}>
      <header className="section-header">
        <h2>Education</h2>
      </header>
      <div class="seperator">
        <p>University College London (UCL)</p>
        <p>MSc AI for Sustainable Development</p>
        <p>GPA: Awaiting dissertation results</p>
      </div>
      <p>Ankara University</p>
      <p>BSc Computer Engineering</p>
      <p>GPA: 3.61</p>
    </section>
  )
}

export default Education
