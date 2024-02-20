
import Head from 'next/head'
import React from "react";
import { motion } from 'framer-motion';
import fetchGenres from "../api/fetchGenres";
import countDocs from "../api/countDocs";
import getGenresArticles from "../api/getGenresArticles";
import Link from 'next/link';
import ArticleCard from '../../components/Genres/ArticleCard';
import { Stack,Pagination, PaginationItem } from '@mui/material';

const genresCards = parseInt(process.env.NUM_GENRES_CARDS);

 export const getStaticPaths = async () => {
   try {
     const genres = await fetchGenres();
     console.log('Genres for pages fetched successfully.');
     const paths=[]
     for(let i=0;i<genres.length;i++){
      const numGenreArticles = await countDocs(genres[i].genre) ;
      const numPages = Math.ceil(numGenreArticles/genresCards)
      for(let j=1;j<=numPages;j++) paths.push({params:{genre:[genres[i].genre.replace(/ /g, '-'),j.toString()]}})
     }

     return {
       paths,
       fallback: false, // Set to true if you want to enable incremental static regeneration
     };
   } catch (error) {
     console.error('Error fetching genres:', error.message);
 
     // If there's an error, return an empty array of paths
     return {
       paths: [],
       fallback: false,
     };
   }
 };

 export const getStaticProps = async ({params}) => {

  try {
    // Fetch data from the API
    const genres = await fetchGenres(params.genre[0].replace(/-/g, ' '));
    const genresArticles = await getGenresArticles(params.genre[0],parseInt(params.genre[1])) ;
    const numGenreArticles = await countDocs(genresArticles[0].genre) ;
    console.log('Fetched Genres for build:',genresArticles);
    
    return {
      props: {
        genre:genres[0],
        data:genresArticles,
        numPages:Math.ceil(numGenreArticles/genresCards)
      },
    };
  } catch (error) {
    console.error('Error fetching genres data for build:', error.message);

    return {
      props: {
        data: {},
      },
    };
  }
};
 

function GenresPage({data,numPages,genre}) {

    return ( 
        <section id="SD1" className='w-full relative bg-primary py-12 min-h-screen p-2'>
         <Head>
        <title>{data[0]?data[0].genre+" Articles":""}</title>
        <meta name="description" content="I post all type of content on this blog." />
        </Head>
           <div className='p-4 flex flex-col w-full'>
            <div className='flex gap-5 flex-col pb-12 sm:pt-8'>
            <motion.h1 style={{textShadow:"7px 7px 0px black"}} initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1}} className="text-3xl justify-start sm:text-5xl font-primary text-lightP">{genre.genre+" :"}</motion.h1>
            <p className='text-white font-primary font-[300] text-xl sm:text-3xl'>{genre.theme}</p>
            </div>
            <div className='g-con grid gap-8 pb-16 w-full md:grid-cols-2 lg:grid-cols-3'>
              {data.map((o,i)=>
              <ArticleCard data={o} key={i}/>
              )}
            </div>

          
          <div className='flex justify-center w-full items-center gap-[30px]'>
          <Pagination
          renderItem={(item) => (
            <Link href={`/genre/${data[0].genre.replace(/ /g, '-')}/${item.page}`}>
            <PaginationItem
              {...item}
            />
            </Link>
          )}
          count={numPages} />
        </div>

           </div>
           
        </section>
     );
}

export default GenresPage;