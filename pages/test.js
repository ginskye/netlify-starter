import Head from 'next/head'
import Colorbox from '@components/Colorbox'
import Footer from '@components/Footer'





/* 16777215 is total possible combo of RGB (255,255,255) */

export default function TestPage() {
  return (
    <div className="container">
      <Head>
        <title>Colorbox Test</title>
              </Head>

    <main>
       <Colorbox />
       </main>
     <Footer />
      

   
    </div>
  )
}
