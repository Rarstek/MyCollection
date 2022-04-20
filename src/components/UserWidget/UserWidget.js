import { useAuth } from "../../hooks/useAuth"
import { Link } from "../Link"
import { Avatar } from "../Avatar"
import { Bars } from "react-loader-spinner"

import styles from "./UserWidget.module.css"

const UserWidget = () => {
  const { user, userReady, documentReady, logout } = useAuth()

  return (
    <div className={styles.widget}>
      {userReady && documentReady
        ? user
          ? (
            <>
              <Link tag="button" onClick={() => logout()}>{user.name}</Link>
              <Avatar src={user.avatarURL} />
            </>)
          : <Link tag="link" to="/login">Zaloguj się</Link>
        : <Bars color="#fff" height={40} width={80} />
      }
    </div>
  )
}

export { UserWidget }
