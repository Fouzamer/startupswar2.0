'use client'
import { useFormik } from 'formik'
import axios from 'axios'

export default function Participation(){
  //Formik logics

  const formik = useFormik({
    initialValues: {
      projectName: '',
      member1: '',
      member2: '',
      member3: '',
      description: '',
      display: true,
      votes: 0,
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.post('../api/post', values);
        alert('Startup created successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to create startup.');
      }
      setSubmitting(false);
    },
  });
  
    return(
      <div className="bg-gradient-to-br from-indigo-950 to-transparent rounded p-12 m-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-[#ffffff20] flex flex-col justify-center items-center content-center">
          <h3 className="text-4xl font-bold m-4">Règles d’inscriptions</h3>
          <ul className="w-full m-6">
              <li>Être régulièrement inscrit à ESGIS</li>
              <li>Avoir une idée de projet de création d'entreprise</li>
              <li>Présentation convaincante</li>
          </ul>
          <h1 className='text-5xl font-bold mt-5 bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text'>3 500 FC</h1>
          <p className="text-2xl mb-6">Frais de participation</p>
          <div className="border-2 rounded p-6 w-full flex flex-col items-center">
              <p className="text-2xl mb-4">Participer</p>
              <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center w-full">
                  <label htmlFor="projectName" id="ProjectName"  >Nom de la Startup</label>
                  <input type="text" name="projectName" value={formik.values.projectName} onChange={formik.handleChange} placeholder=" Nom du Project" className="rounded bg-transparent border-2 p-1 my-1"/>
                  <label htmlFor="names">Membre(s) de l'équipe</label>
                  <div className="flex flex-row justify-between max-[500px]:flex-col">
                      <input className="rounded bg-transparent border-2 w-3/12 p-1 my-1 max-[500px]:w-full" id="member-1" name="member1" value={formik.values.member1} onChange={formik.handleChange} placeholder=" Membre 1" type="text" />
                      <input className="rounded bg-transparent border-2 w-3/12 p-1 my-1 max-[500px]:w-full" id="member-2" name="member2" value={formik.values.member2} onChange={formik.handleChange} placeholder=" Membre 2" type="text" />
                      <input className="rounded bg-transparent border-2 w-3/12 p-1 my-1 max-[500px]:w-full" id="member-3" name="member3" value={formik.values.member3} onChange={formik.handleChange} placeholder=" Membre 3" type="text" />
                  </div>
                  <label htmlFor="description">Description</label>
                  <input type="textarea" placeholder=" Veuillez entrer une brève description de votre startup" name='description' value={formik.values.description} onChange={formik.handleChange} className="rounded bg-transparent border-2  p-1 my-1"/>
                  {/* <div id='cover-image border-2 rounded border-solid'>
                      <p>
                          Converture du projets
                          [Facultative]
                      </p>
                  </div> */}
                  <button type='submit' onSubmit className="border-solid border-2 border-slate-0 rounded w-min place-self-center p-1 mt-6 hover:bg-white hover:text-black">Soumettre</button>
              </form>
          </div>
      </div>
    )
}
