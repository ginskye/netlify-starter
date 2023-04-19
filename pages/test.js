import Head from 'next/head'
import Colorbox from '@components/Colorbox'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'





/* 16777215 is total possible combo of RGB (255,255,255) */

export default function TestPage() {
  return (
    <div className="container">
      <Head>
        <title>Colorbox Test</title>
        <Navbar/>
              </Head>

    <main>
    <div className="boxColor"></div>
       <Colorbox />
       </main>
     <Footer />
      

   
    </div>
  )
}
