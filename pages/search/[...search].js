
import Head from 'next/head'
import React from "react";
import ArticleCard from '../../components/Genres/ArticleCard';
import search from '../api/search';
import { Stack,Pagination, PaginationItem } from '@mui/material';
import Link from 'next/link';


 export const getServerSideProps = async ({query}) => {
    
    const searchTerm = query.search[0].replace(/\+/g, " ");
    const currentPage = parseInt(query.search[1]) || 1;

  try {
    // Fetch data from the API
    const data = await search(searchTerm,currentPage )
    console.log(data);
    return {
      props: {...data}
    };
  } catch (error) {
    console.error('Error fetching matches for build:', error.message);

    return {
      props: {
        data: {},
      },
    };
  }
};
 

function GenresPage({matches,currentPage,totalPage,query,totalResults}) {

    return ( 
        <section id="SD1" className='w-full relative bg-primary py-12 min-h-screen p-2'>
         <Head>
        <title>{"Seach results for: "+query}</title>
        <meta name="description" content="I post all type of content on this blog." />
        </Head>
           <div className='p-4 flex flex-col w-full'>
            <div className='flex gap-5 flex-col pb-12 sm:pt-8'>
            <p className='text-white font-primary font-[300] text-xl sm:text-3xl'>{"Seach results for: "+query}</p>
            <p className='text-slate-300 text-md sm:text-3xl'>{`${totalResults==0?"No ":totalResults}${totalResults==1?" match ":" matches "}found:`}</p>
            </div>
            <div className='g-con grid gap-8 pb-16 w-full md:grid-cols-2 lg:grid-cols-3'>
              {matches.map((o,i)=>
              <ArticleCard data={o} key={i}/>
              )}
            </div>
            <div className='flex justify-center w-full items-center gap-[30px]'>
      <Pagination
      renderItem={(item) => (
        <Link href={`/search/${query}/${item.page}`}>
        <PaginationItem
          {...item}
        />
        </Link>
      )}
      count={totalPage} />
    </div>
           </div>
           
        </section>
     );
}

export default GenresPage;