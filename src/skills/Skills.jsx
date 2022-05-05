import styles from './Skills.module.css'
import skillsData from './../data/skillsData.json'

const Skills = () => {
  return (
    <section id={styles.skills}>
      <header className="section-header">
        <h2>Skills</h2>
      </header>
      <div>
        {skillsData.map((skillData) => (
          <article key={skillData.id}>
            <h4>{skillData.type}</h4>
            {skillData.skills.map((skill, index) => (
              <div key={index}>
                {skill[0] && <p>{skill[0]}</p>}
                {skill[1] && <p>{skill[1]}</p>}
                {skill[2] && <p>{skill[2]}</p>}
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
