import React from 'react'
import Layout from "../components/layout/Layout"
import HomeSection from "../components/Home/HeroSection"
import RecentlyUploadedNotes from '../components/Home/RecentlyUploadedNotes'
const Home = () => {
  return (
    <Layout>
      <HomeSection/>
      <RecentlyUploadedNotes/>
    </Layout>
  )
}

export default Home
