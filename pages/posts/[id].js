
import fetchBlogArticles from "../api/fetchArticles";
import getRecommended from "../api/getRecommended";
import Head from 'next/head'
import fetchById from "../api/fetchById";
import React from "react";
import TitleSection from "../../components/Articles/TitleSection";
import Article from "../../components/Articles/Article";

function removeParagraphTags(text) {
  // Remove <p> at the beginning
  let result = text.replace(/^<p>/, '');

  // Remove </p> at the end
  result = result.replace(/<\/p>$/, '');

  return result;
}

export const getStaticProps = async ({params}) => {
   try {
     // Fetch data from the API
     const article = await fetchById(params.id) ;
     const response = await getRecommended(article[0].genre)
     console.log('Fetched Blog Articles:', response);
     
     return {
       props: {
         data:response,
         article:article[0]
       },
     };
   } catch (error) {
     console.error('Error fetching data:', error.message);
 
     return {
       props: {
         data: {},
       },
     };
   }
 };

 export const getStaticPaths = async () => {
   try {
     const slugs = await fetchBlogArticles() ;
 
     // Generate paths based on the fetched slugs
     const paths = slugs.map((slug) =>{ 
      const inputString=slug.title
      return ({
       params: { id:inputString.replace(/ /g, '-')},
     })});
 
     return {
       paths,
       fallback: false, // Set to true if you want to enable incremental static regeneration
     };
   } catch (error) {
     console.error('Error fetching slugs:', error.message);
 
     // If there's an error, return an empty array of paths
     return {
       paths: [],
       fallback: false,
     };
   }
 };
 

function Articles({data,article}) {
    return ( 
        <section className='w-full relative bg-primary py-12 flex justify-center'>
         <Head>
        <title>{article.title}</title>
        <meta name="description" content={removeParagraphTags(article.section[0].content)}/>
      </Head>
           <div className="z-[5] relative px-3 sm:px-6 py-4 sm:py-8 text-[1.35rem] leading-[1.625] flex flex-col gap-[2rem] max-w-[1400px]">
            <TitleSection date={article.date} title={article.title} sub={article.genre}/>
             <Article article={article} data={data}/>
           </div>
           <div className='absolute top-0 w-full h-[700px] sm:h-[1300px] bg-cover bg-[url("/stars1.png")] bg-center top-[1px]'></div>
        </section>
     );
}

export default Articles;