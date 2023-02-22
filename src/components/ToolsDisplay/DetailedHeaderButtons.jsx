import React from 'react'
import BackButton from '../Discovery/BackButton'
import FavButton from '../Discovery/FavButton'
import ShareButton from '../Discovery/ShareButton'

function DetailedHeaderButtons({page, handleClick}) {
  return (
    <>
    <BackButton />
    <ShareButton handleClick={handleClick}/>
    <FavButton />
    </>
  )
}

export default DetailedHeaderButtons