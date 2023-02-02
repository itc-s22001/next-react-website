import style from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

const PostCategories = ({ categories }) => {
  return (
    <div className={style.flexContainer}>
      <h3 className={style.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className='sr-only'>Categories</span>
      </h3>
      <ul className={style.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`} legacyBehavior>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PostCategories
