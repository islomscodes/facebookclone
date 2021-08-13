import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { getSession } from 'next-auth/client'
import Login from '../components/Login'

export default function Home({ session }) {
  
  if(!session) return <Login/>
  return (
    <div className={styles.container}>
      <Head>
        <title>Facebook</title>
      </Head>
<Header/>
     
      {/* header */}
      <main>
        {/* Sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  // get user
  const session = await getSession(context);
  return {
    props: {
      session 
  
    }
  }
}