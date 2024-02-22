import Link from 'next/link';
import Stext from '../components/Articles/SText';
import Head from 'next/head';

const NotFoundPage = () => {
  return (
    <div className='h-screen flex justify-center relative' id='notfound'>
         <Head>
        <title>404 - InkInspireHub</title>
        <meta name="description" content="I post all type of content on this blog, Technology, Science and Nature, Stories of Human and more..." />
        </Head>
        <div className='bg-[url("/404img.png")] bg-right bg-no-repeat w-[80%] bg-contain md:w-[500px] aspect-[1] absolute top-0 bottom-0 right-[10px] m-[auto]'></div>
        <div className='flex flex-col gap-10 items-center pt-[6rem] px-4 sm:pt-[10rem] max-w-[900px] relative z-[3]'>
      <Stext x={5} y={5} color={"black"} tag={"div"} className="text-6xl font-[300] text-lightP text-center font-primary">404 - Page Not Found</Stext>
      <Stext x={5} y={5} color={"black"} tag={"div"} className='text-white text-3xl sm:text-4xl text-center !leading-[50px] max-w-[650px]'>The page you are looking for might have been removed or is temporarily unavailable.</Stext>
      <Link className='text-center text-xl p-3 bg-white border-2 border-black hover:drop-shadow-[-3px_3px_0px_rgba(0,0,0,1)] transition hover:scale-[1.1]' href="/">
        Go back to home
      </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
