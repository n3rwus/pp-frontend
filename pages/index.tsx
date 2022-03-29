import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SignIn from './account'
import Navbar from '../components/common/Navbar/HideAppBar'
const Home: NextPage = () => {
  return (
      <Navbar>
        <SignIn />
      </Navbar>
  )
}

export default Home
