import React, { useState } from 'react'
import http from '../../services/httpServices'
import ApiReponse from '../apiresponse/ApiReponse';
import Button from '@mui/material/Button';
import "./searchbar.css"


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
      const {data:games} = await http.get(`https://api.rawg.io/api/games?&page_size=40&ordering=-rating&search=${slug}`, {params : {key: '380489e110b346de861297ff98597e4c'}})
      setGames(games.results)
      console.log(games.results)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='okayContainer'>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleChange} value={searchTerms} size="60" placeholder='Enter a game title' />
        <Button size="small" color="primary" variant="outlined" onClick={onSubmit}> Search game</Button>
      </form>
      <ApiReponse game={game}/>
      </div>
  )
}

export default Searchbar
