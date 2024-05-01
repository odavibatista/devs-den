import styles from './styles.module.scss'

interface User {
    name: string
}

interface Props {
    title: string
}

const Item = ({title}: Props) => {
    return (
        <div className={styles.item}>
            <h2>{title}</h2>
        </div>
    )
}

const Account = (user: User) => {
    return (
        <div className={styles.account}>
            <div className={styles.login}>
                <h2>{user ? user.name : "Logar"}</h2>
            </div>
        </div>
    )
}

export default function Header() {

    return(
        <div className={styles.header}>
            <div className={styles.back}>
                <div className={styles.left}/>
                <div className={styles.right}/>
            </div>

            <div className={styles.block}>
                <Item title={"H"} />
                <Item title={"J"} />
                <Item title={"C"} />
                <Item title={"D"} />
                <Account name={"Jeff"} />
            </div>
        </div>
    )
}