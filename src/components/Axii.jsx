import React, { useEffect, useState } from 'react';
import axios from 'axios';
import http from '../services/httpServices';
import "./axii.css";

function Axii(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getGamers() {

        try {
            const { data: posts } = await http.get('/games', {
              params: { key: 'e45d9a3e0e1d43efa0ea90e325a4bd66' },
            })
      
            setPosts(posts.results)
            console.log(posts)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    getGamers()
  }, [])

  return (
    <div>
      <ul className="game">
        {posts.map((item) => (
          <li className="card" key={item.id}>
            {item.name} <img className="pic"src={item.background_image} />{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Axii
