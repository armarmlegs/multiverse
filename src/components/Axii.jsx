import React, { useEffect, useState, useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import http from '../services/httpServices'
import './axii.css'
import { UserContext } from '../pages/Home'
import Searchbar from './searchbar/searchbar'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

function Axii() {
  const value = useContext(UserContext)
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPages] = useState(2)

  useEffect(() => {
    async function getGamers() {
      try {
        const { data: games } = await http.get(
          `https://api.rawg.io/api/games`,
          {
            params: { key: '380489e110b346de861297ff98597e4c' },
          }
        )

        setGames(games.results)
        console.log(games.results)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getGamers()
  }, [])

  const fetchGamers = async () => {
    try {
      const { data: games } = await http.get(
        `https://api.rawg.io/api/games?page=${page}&page_size=20`,
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
    setGames([...games, ...gamesNext])
  }

  const filteredGames = games.filter((game) => {
    return game.slug.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <Searchbar />
      <InfiniteScroll
        dataLength={games.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {loading && <div>Loading games..</div>}

        <div className="container">
          {/* <h1>Goodmorning, {value}</h1> */}  
         
          <div className="videos">
            <section>
              <article>
                <ul className="video-section">
                  {filteredGames.map((item) => (
                    <li className="video-container" key={item.id}>
                      <Link to={`/game/${item.id}`} state={{ gameDets: item }}>
                        <img
                          className="thumbnail-image"
                          src={item.background_image}
                          alt="https://picsum.photos/200"
                        />{' '}
                      </Link>
                      <div className="video-bottom">
                        <img
                          className="game-icon"
                          src={item.background_image}
                          alt="https://picsum.photos/200"
                        />
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
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Axii
