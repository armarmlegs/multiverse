import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../services/httpServices'

const GameDetails = () => {
  const { gameId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getGame() {
      try {
        const { data: details } = await http.get(`/games/${gameId}`, {
          params: { key: '380489e110b346de861297ff98597e4c' },
        })

        setDetails(details)
        console.log(details)
      } catch (error) {
        console.log(error)
      }
    }

    getGame()
  }, [])

  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.background_image} alt="" />
      <p>{details.description_raw}</p>
    </div>
  )
}

export default GameDetails
