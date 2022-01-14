import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import http from '../services/httpServices'
import './gameDetails.css'

function GameDetails(props) {
  const { gameId } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    async function getGame() {
      try {
        const { data: details } = await http.get(
          `https://api.rawg.io/api/games/${gameId}`,
          {
            params: { key: '380489e110b346de861297ff98597e4c' },
          }
        )
        setDetails(details)
        console.log(details)
        console.log(JSON.stringify(details.esrb_rating.name))
      } catch (error) {
        console.log(error)
      }
    }
    getGame()
  }, [gameId])

  return (
    <Fragment>
      <div className="superContainer">
        <img src={details.background_image} alt="" className="image-display" />
        <div>
          <h4>{details.name}</h4>
          <p>{details.description_raw}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default GameDetails
