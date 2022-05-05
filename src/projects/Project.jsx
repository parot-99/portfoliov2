import { WinBox } from './../utils'
import styles from './Project.module.css'
import covidProjectImg from './../images/covidProjectImg.JPG'
import steveProjectImg from './../images/steveProjectImg.png'
import eliteProjectImg from './../images/eliteProjectImg.png'
import twitterProjectImg from './../images/twitterProjectImg.png'

const Project = (props) => {
  const image = [
    covidProjectImg,
    steveProjectImg,
    eliteProjectImg,
    twitterProjectImg,
  ]
  return (
    <article className={styles.project + ' split-container'}>
      <section>
        <WinBox
          value={props.value}
          title={props.title}
          terminalTitle={props.terminalTitle}
        >
          <p>{props.description}</p>
          <a href={props.codeLink} target="_blank" rel="noreferrer">
            Code
          </a>
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </WinBox>
        <p>{props.tags}</p>
      </section>
      {props.img ?? (
        <section>
          <img src={image[props.image]} alt="" />
        </section>
      )}
    </article>
  )
}

export default Project
