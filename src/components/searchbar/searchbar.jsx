import React, { useState } from 'react'
import http from '../../services/httpServices'
import ApiReponse from '../apiresponse/ApiReponse';
import { Link } from 'react-router-dom'


const Searchbar = () => {
  const [searchTerms, setSearchTerms] = useState('')
  const [game, setGames] = useState([])

  const handleChange = (e) => {
    setSearchTerms(e.target.value)
    console.log("searchTerms")
  }

  const onSubmit = async (e) =>{
    e.preventDefault()
    let slug = searchTerms.split(' ').join('_').toLowerCase();
    console.log(slug)
    try {
      const {data:games} = await http.get(`https://api.rawg.io/api/games?search=${slug}`, {params : {key: '380489e110b346de861297ff98597e4c'}})
      setGames(games.results)
      console.log(games.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleChange} value={searchTerms} />
        <button onClick={onSubmit}> Click</button>
      </form>
      <div className="container">
      <div className="videos">
        <section>
          <article>
            <ul className="video-section">
              {game.map((item) => (
                <li className="video-container" key={item.id}>
                  <Link to={`/game/${item.id}`}>
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
                        <span>Metacritic score: {item.metacritic}</span> •{' '}
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
    </div>
  )
}

export default Searchbar
