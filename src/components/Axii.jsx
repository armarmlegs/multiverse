import React, { useEffect, useState } from 'react'
import http from '../services/httpServices'
import './axii.css'

function Axii(props) {
  const [games, setGames] = useState([])

  useEffect(() => {
    async function getGamers() {
      try {
        const { data: games } = await http.get('/games?page_size=45', {
          params: { key: 'e45d9a3e0e1d43efa0ea90e325a4bd66' },
        })
        // const gameX = games.results
        setGames(games.results)
        console.log(games)
      } catch (error) {
        console.log(error)
      }
    }

    getGamers()
  }, []);

 

  return (
    <div className="container">
      <div className="videos">
        <section>
          <article>
            <ul className="video-section">
              {games.map((item) => (
                <li className="video-container" key={item.id}>
                  <img
                    className="thumbnail-image"
                    src={item.background_image}
                  />{' '}
                  <div className="video-bottom">
                    <img className="game-icon" src={item.background_image} />
                    <div className="game-details">
                     
                      <div className="game-metadata">
                      <h3 className="game-title">{item.name}</h3>
                        <span>Metacritic score: {item.metacritic}</span> •{' '}
                        {item.genres.map((genre)=> <span key={genre.id}>{genre.name}</span>)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <h1>{games.next}</h1>
      </div>

      {/* <section className='card-section'>
            <article className="card-container">

      <ul className="game">
        {posts.map((item) => (
          <li className="card" key={item.id}>
            <img className="pic" src={item.background_image} />{' '}
          </li>
        ))}
      </ul>


            </article>



        </section> */}
    </div>
  )
}

export default Axii
