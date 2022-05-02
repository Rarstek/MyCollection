import { useParams } from "react-router-dom"

import { ServiceItemEdit, MovieFields } from "../../components"
import { movieConstants } from "../../constants"

export const MovieEdit = () => {
  const { id } = useParams()

  return (
    <ServiceItemEdit
      collection="movies"
      constants={movieConstants}
      id={id}
    >
      <MovieFields />
    </ServiceItemEdit>
  )
}
