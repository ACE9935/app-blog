import Head from 'next/head'
import HomeMain from '../components/Home/HomeMain'
import SecondSection from '../components/Home/SecondSection'
import ThirdSection from '../components/Home/ThirdSection'
import fetchBlogArticles from './api/fetchArticles';
import fetchGenres from './api/fetchGenres';
import Scroller from '../components/Scroller';

export const getStaticProps = async ({ params }) => {
  try {
    // Fetch data from the API
    const genres = await fetchGenres();
    const response = {};

    for (let i = 0; i < genres.length; i++) {
      const o = genres[i];
      const x = await fetchBlogArticles(o.genre, 2);
      response[o.genre] = x;
    }

    console.log('Home articles fetched', response);
    console.log('Home genres fetched', genres);

    return {
      props: {
        data: response,
        genres: genres,
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
export default function Home({data,genres}) {

  return (
    <div>
      <Head>
        <title>InkInspireHub</title>
        <meta name="description" content="I post all type of content on this blog." />
      </Head>
    <HomeMain/>
    <SecondSection/>
  <Scroller/>
   <ThirdSection data={data} genres={genres}/>
    </div>
  )
}
