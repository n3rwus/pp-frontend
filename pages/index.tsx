import type { NextPage } from 'next'
import Navbar from '../components/common/Navbar/Navbar'
import SignIn from './account'
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <SignIn />
      <SignIn />
      <SignIn />
      <SignIn />
      <SignIn />
      <SignIn />
    </div>
  )
}

export default Home
