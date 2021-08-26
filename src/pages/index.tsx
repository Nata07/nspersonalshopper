import Head from "next/head";
import styled from './home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | NS Personal Shopper</title>
      </Head>
      <main className={styled.container}>
        <h1>NS Personal Shopper</h1>
      </main>
    </>
  )
}
