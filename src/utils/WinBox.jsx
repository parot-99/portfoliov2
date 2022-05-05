import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import WinBox from 'winbox/src/js/winbox'
import styles from './WinBox.module.css'

const WinBoxItem = (props) => {
  const ref = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  const generateWinBox = (title, ref) => {
    new WinBox({
      title: title,
      width: isMobile ? '100%' : '600px',
      height: '400px',
      x: isMobile ? 'center' : '10%',
      y: isMobile ? 'center' : '10%',
      top: isMobile ? '0' : '10%',
      bottom: isMobile ? '0' : '10%',
      left: isMobile ? '0' : '10%',
      right: isMobile ? '0' : '10%',
      mount: ref.current,
      onfocus: function () {
        this.setBackground('#00AD9F')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  }

  return (
    <>
      <h4 onClick={() => generateWinBox(props.title, ref)}>{props.value}</h4>
      <article className={styles.hidden}>
        <div ref={ref}>
          <h2>
            {props.terminalTitle}:$ <span className="cursor">|</span>
          </h2>
          {props.children}
        </div>
      </article>
    </>
  )
}

export default WinBoxItem
