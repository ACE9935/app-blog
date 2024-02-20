
import styles from "../styles/loading.module.scss"
import Head from "next/head";

export default function Loading({query}) {
 
    return (
      <section id="SD1" className='w-full relative bg-primary py-12 min-h-screen p-2 flex justify-center'>
      <Head>
     <title>Waiting for matches...</title>
     <meta name="description" content="I post all type of content on this blog." />
     </Head>
      <div className='p-4 flex flex-col w-full max-w-[1400px]'>
           <div className='flex gap-5 flex-col pb-12 sm:pt-8'>
            <p className='text-white font-primary font-[300] text-2xl sm:text-3xl'>Waiting for matches...</p>
      <div className="grid gap-6 pb-16 w-full md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 3 }, (_, index) => index + 1).map((i)=><div key={i} class={styles.card}>
		<div key={i+1} class={`${styles.skeleton} ${styles["card-img"]}`}>
		</div>
		<div key={i+2} class={`${styles["card-body"]}`}>
			<h2 key={i+3} class={`${styles.skeleton} ${styles["card-title"]}`}>
			</h2>
			<p key={i+3} class={`${styles.skeleton} ${styles["card-intro"]}`}>
			</p>
		</div>
	</div>)}
  </div>
  </div>
    </div>
    </section>
    );
  }