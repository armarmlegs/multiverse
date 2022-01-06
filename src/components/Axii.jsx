import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import http from '../services/httpServices'
import './axii.css'

function Axii(props) {
  const [games, setGames] = useState([])
  const [page, setPages] = useState(2)
  const [eq, setEq] = useState('')

  useEffect(() => {
    async function getGamers() {
      console.log(games)
      try {
        const { data: games } = await http.get(`/games?page=1&page_size=20`, {
          params: { key: '380489e110b346de861297ff98597e4c' },
        })

        setGames(games.results)
        console.log(games.next)
      } catch (error) {
        console.log(error)
      }
    }

    getGamers()
  }, [])

  const fetchGamers = async () => {
    try {
      const { data: games } = await http.get(
        `/games?page=${page}&page_size=20`,
        {
          params: { key: '380489e110b346de861297ff98597e4c' },
        }
      )
      return games.results
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    setPages(page + 1)
    const gamesNext = await fetchGamers()
    console.log(gamesNext)
    setGames([...games, ...gamesNext])
  }

  return (
    <InfiniteScroll
      dataLength={games.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <input value={eq} onChange={(e) => setEq(e.target.value)} />
      <div className="container">
        <div className="videos">
          <section>
            <article>
              <ul className="video-section">
                {games.map((item) => (
                  <li className="video-container" key={item.id}>
                    <Link to={`/game/${item.id}`}>
                      <img
                        className="thumbnail-image"
                        src={item.background_image}
                      />{' '}
                    </Link>
                    <div className="video-bottom">
                      <img className="game-icon" src={item.background_image} />
                      <div className="game-details">
                        <div className="game-metadata">
                          <h3 className="game-title">{item.name}</h3>
                          <span>
                            Metacritic score: {item.metacritic}
                          </span> •{' '}
                          {item.genres.map((genre) => (
                            <span key={genre.id}>{genre.name}</span>
                          ))}
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
    </InfiniteScroll>
  )
}

export default Axii
