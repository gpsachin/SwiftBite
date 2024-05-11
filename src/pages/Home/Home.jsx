import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Food_Display from '../../components/FoodDisplay/Food_Display'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {

  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu  category={category} setCategory={setCategory} />
      <Food_Display category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
