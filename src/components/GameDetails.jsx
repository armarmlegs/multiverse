import { useLocation } from 'react-router-dom'
import './gameDetails.css'
import { Typography } from '@mui/material'
import { ImageList, ImageListItem, ListItem, List } from '@mui/material'

const GameDetails = (props) => {
  const location = useLocation()
  const { gameDets } = location.state

  console.log(gameDets)

  return (
    <div className="super-container">
      <div>
        <Typography variant="h2">{gameDets.name}</Typography>
        <div className="godamn">
          <Typography variant="caption">
            Released Date :{gameDets.released}
          </Typography>
       
        <Typography>Genres : </Typography>
        <List>
          {gameDets.genres.map((g) => (
            <Typography variant="p" key={g.id}>{g.name}</Typography>
            ))}
        </List>
            </div>
      </div>


      <img className="image-display" src={gameDets.background_image} alt="" />

      {gameDets.platforms.map((r) => (
        <div key={r.platform.id}>{r.platform.slug}</div>
      ))}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={160}>
        {gameDets.short_screenshots.map((item) => (
          <ImageListItem key={item.image}>
            <img
              className="mage"
              src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default GameDetails
