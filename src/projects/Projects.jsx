import styles from './Projects.module.css'
import Project from './Project'
import projectsData from './../data/projectsData.json'

const Projects = () => {
  return (
    <section id={styles.projects}>
      <header className="section-header">
        <h2>Projects</h2>
      </header>
      {projectsData.map((projectData) => (
        <Project
          key={projectData.id} 
          value={projectData.value}
          title={projectData.title}
          terminalTitle={projectData.terminalTitle}
          description={projectData.description}
          codeLink={projectData.codeLink}
          tags={projectData.tags}
          demoLink={projectData.demoLink}
          image={projectData.image}
        />
      ))}
    </section>
  )
}

export default Projects
