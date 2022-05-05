import styles from './Contact.module.css'
import contactData from './../data/contactData.json'

const Contact = () => {
  return (
    <article id={styles.contact}>
      {contactData.map((contact) => (
        <div key={contact.id} className={styles['contact-data']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 48"
            width="20px"
            height="20px"
          >
            <path fill="#FFFFFF" d={contact.iconData} />
          </svg>
          {contact.name !== 'Email' && (
            <a href={contact.url} target="_blank" rel="noreferrer">
              {contact.name}
            </a>
          )}
          {contact.name === 'Email' && (
            <a href={'mailto: ' + contact.url}>
              {contact.name}
            </a>
          )}
        </div>
      ))}
    </article>
  )
}

export default Contact
