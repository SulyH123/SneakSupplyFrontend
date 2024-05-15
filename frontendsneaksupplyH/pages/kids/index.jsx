import React, { useContext } from 'react'
import ApparelComp from "@/components/Kids/index"
import context from '@/context/context';
import Head from 'next/head';


const Courses = () => {
  const a = useContext(context)
  return (
    <>
      <Head>
        <title>Sneak and Supply | Sneak n supply shoes</title>
        <meta name="description" content="Elevate your style with Sneak n supply shoes's exclusive range of apparel." />
        <meta property="og:title" content="Combat Apparel Collection | Combat AI" />
        <meta property="og:description" content="Browse our selection of premium apparel, designed for both performance and style. " />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <ApparelComp />
      </>

    </>
  )
}

export default Courses