import { useNavigate } from "react-router-dom"
import styles from "./ServiceItem.module.css"

const ServiceItem = (props) => {
  const { serviceItem } = props
  const navigate = useNavigate()

  return (
    <div
      className={styles["service-item"]}
      onClick={() => navigate(`/${serviceItem.collection}/${serviceItem.id}`)}
    >
      <div className={styles["image-container"]}>
        <img
          className={styles["item-image"]}
          src={serviceItem.src}
          alt={serviceItem.title}
        />
      </div>

      <div className={styles["item-caption"]}>
        <p className="author">
          {serviceItem.author}
        </p>

        <p className={styles.title}>
          {serviceItem.title}
        </p>
      </div>
    </div>
  )
}

export { ServiceItem } 
