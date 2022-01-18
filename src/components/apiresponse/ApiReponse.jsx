import React from 'react';
import { Link } from 'react-router-dom';


const ApiReponse = (props) => {
    
  return (
    <div className="container">
      <div className="videos">
        <section>
          <article>
            <ul className="video-section">
              {props.game.map((item) => (
                <li className="video-container" key={item.id}>
                  <Link to={`/game/${item.id}`}
                  state={{gameDets : item}}>
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
  )
}

export default ApiReponse
