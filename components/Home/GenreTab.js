import GenreSec from "./GenreSec";
import GenreGall from "./GenreGall";
import styles from "../../styles/section3.module.css"

function GenreTab({data,genre}) {


    return ( 
        <div className={`${styles.tabg} relative tabg-ani gap-6 sm:py-6 sm:px-24 items-center flex max-w-[1400px]`}>
        <div className={styles["comic-book-page"]}><GenreGall data={data} />
        <span className={styles["borderx-gally"]}></span>
        </div>
       
       <GenreSec genre={genre}/>
       </div>
     );
}

export default GenreTab;