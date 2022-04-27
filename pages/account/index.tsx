import type { NextPage } from 'next'
import Head from 'next/head'
import LoginForm from '../../components/login-form'

const Account: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginForm/>
      </main>
    </div>
  )
}

export default Account