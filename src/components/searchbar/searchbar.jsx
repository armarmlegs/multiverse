import React, { useState } from 'react'

function Searchbar(props) {
  const [searchTerms, setSearchTerms] = useState('')
  return (
    <div>
      <input
        type="text"
        placeholder="Search games"
        onChange={(e) => {
          setSearchTerms(e.target.value)
        }}
      />
    </div>
  )
}

export default Searchbar
