import Participation from './Participation/page.js'
import Startup from './startups/page'

export default function Home() {
  return (
    <main className="flex max-w-screen-xl flex-col items-center justify-between place-self-center p-12 max-[500px]:m-0 ">
      <img src="/assets/Asset 7.svg" className='w-[60%] m-auto max-[500px]:w-[80%]'/>
      <p id='description-i' className='text-lg text-center w-[60%]  m-8 max-[400px]:text-xs:w-[90%]'>
        La Startup’s war est une compétition de création de startup(Jeune entreprise novatrice dans le secteur des nouvelles technologies, sur Internet). Elle est ouverte à tous les étudiants de l'université et vise à stimuler la créativité et l'entrepreneuriat chez les jeunes.
      </p>
      <h2 id='prix' className="text-4xl font-bold text-center m-4 max-[400px]:text-l">
          Les prix à gagner
      </h2>
      <div id='le-grand-prix' className='bg-gradient-to-br from-indigo-950 to-transparent rounded p-12 m-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center
        max-[555px]:p-6 max-[320px]:w-full'>
        <h1 className='text-5xl font-bold m-4 bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text
          max-[480px]:text-4xl max-[320px]:text-2lg text-center mx-0  '>50 000 FC</h1>
        <p className='text-xl max-[320px]:text-base text-center'>
          À gagner parmi 
          tant d’autres
        </p>
      </div>
      <div id='la-range-des-autres-prix' className='flex flex-row justify-between items-center w-[65%] mb-24
        max-[900px]:flex-col'>
        <div id='prix-n2' className='w-48 bg-gradient-to-br mx-2 from-indigo-950 to-transparent rounded p-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center my-2'>
          <img src="/assets/icons8-diploma-96.png" />
          <p className='text-center'>
            Des attestations de participation
          </p>
        </div>
        <div id='prix-n1' className='w-48 bg-gradient-to-br mx-2 from-indigo-950 to-transparent rounded p-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center my-2'>
          <img src="/assets/icons8-trophy-96.png" />
          <p className='text-center'>
            Un trophée à l’équipe gagnante de la finale
          </p>
        </div>
        <div id='prix-n3' className='w-48 bg-gradient-to-br mx-2 from-indigo-950 to-transparent rounded p-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center my-2'>
          <img src="/assets/icons8-company-96.png" />
          <p className='text-center'>
            Une visite dans une Startup
          </p>
        </div>
      </div>
      <Participation />
      <h1 className='text-5xl text-center font-bold m-4 bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text' >Les Startups</h1>
      <Startup />
    </main>
  )
}
