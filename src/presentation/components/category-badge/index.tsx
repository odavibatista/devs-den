import Image from 'next/image'
import styles from './styles.module.scss'

interface CategoryBadgeProps {
    name: string
    imageUrl: string
}

const CategoryBadge = ({ name, imageUrl }: CategoryBadgeProps): JSX.Element => {

    return(
        <div className={styles.categoryBadge}>
            <Image src={imageUrl} alt={name}/>
            <h4 className={styles.h4}>
                {name}
            </h4>
        </div>
    )
}

export default CategoryBadge