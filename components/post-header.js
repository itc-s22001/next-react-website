import style from 'styles/post-header.module.css'
import ConvertDate from 'components/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const PostHeader = ({ title, subtitle, publish = '' }) => {
  return (
    <div className={style.stack}>
      <p className={style.subtitle}>{subtitle}</p>
      <h1 className={style.title}>{title}</h1>
      {publish && (
        <div className={style.publish}>
          <FontAwesomeIcon icon={faClock} size='lg' color='var(--gray-25)' />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
export default PostHeader
