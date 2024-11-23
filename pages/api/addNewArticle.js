import connectDB from './database';
import Blog from './blogArticleModel';

const article = {
  title: "Laniakea: Mapping Our Cosmic Neighborhood",
  date: "March 10, 2024",
  genre: "Science and Nature",
  sections: [
    {
      title: "Introduction",
      content: `
        <p>The Laniakea Supercluster, a vast cosmic structure housing thousands of galaxies, including our own Milky Way, represents one of the largest known formations in the universe. This awe-inspiring region of space challenges our understanding of the cosmos and offers a glimpse into the grand interconnectedness of galaxies. In this article, we explore the discovery, structure, and significance of the Laniakea Supercluster, revealing the profound scale of our cosmic neighborhood.</p>
      `,
    },
    {
      title: "What is the Laniakea Supercluster?",
      content: `
        <p>Laniakea, meaning "immense heaven" in Hawaiian, is a supercluster of galaxies spanning over 500 million light-years. This monumental structure was defined in 2014 through advancements in mapping galactic flows, revealing the gravitational boundaries that group galaxies into this enormous cluster. Laniakea not only includes the Milky Way but also other notable clusters like the Virgo Cluster.</p>
      `,
    },
    {
      title: "The Discovery",
      content: `
        <p>In 2014, a team of astronomers led by Brent Tully used data on galaxy movements to define the Laniakea Supercluster. By analyzing the flow of galaxies relative to the universe's expansion, they identified a gravitationally bound region that connects thousands of galaxies. This breakthrough provided a clearer picture of how galaxies are distributed and influenced by gravity on a cosmic scale.</p>
      `,
    },
    {
      title: "Structure and Boundaries",
      content: `
        <p>
        <img src="/cosmic/img-1.png" alt="Galactic flow map"/>
        The Laniakea Supercluster is defined by its gravitational pull, which directs the motion of galaxies toward the Great Attractor—a dense region acting as the supercluster's center. The boundaries of Laniakea mark where gravitational influences from neighboring superclusters, such as Perseus-Pisces or Shapley, dominate. Its complex web of filaments and voids highlights the intricate cosmic structure shaped by dark matter and gravity.</p>
      `,
    },
    {
      title: "Significance in Cosmology",
      content: `
        <p>Laniakea has reshaped how astronomers view our position in the universe. It emphasizes the interconnectedness of galaxies, showing that the Milky Way is part of a much larger system than previously thought. Understanding superclusters like Laniakea helps scientists study the universe's large-scale structure, dark matter distribution, and the forces driving cosmic evolution.</p>
      `,
    },
    {
      title: "The Role of Dark Matter",
      content: `
        <p>Dark matter plays a crucial role in the formation and stability of superclusters like Laniakea. Invisible and mysterious, it provides the gravitational framework necessary to bind galaxies over vast distances. Studies of Laniakea offer insights into the nature of dark matter, as well as its influence on galactic flows and the evolution of cosmic structures.</p>
      `,
    },
    {
      title: "Laniakea in the Broader Universe",
      content: `
        <p>Laniakea is just one of many superclusters in the observable universe. When viewed alongside other structures, such as the Hercules-Corona Borealis Great Wall, it highlights the scale and diversity of cosmic formations. The study of superclusters provides a deeper understanding of the universe's hierarchical nature, from small galactic groups to the immense cosmic web.</p>
      `,
    },
    {
      title: "Conclusion",
      content: `
        <p>The Laniakea Supercluster serves as a stunning reminder of the vastness and complexity of the universe. As we uncover its secrets, we gain a greater appreciation for our place in the cosmos. Through the lens of astronomy and astrophysics, Laniakea offers a bridge between the known and the unknown, fueling our quest to understand the universe's grand design.</p>
      `,
    },
  ],
};



export default async function addNewArticle() {
  // Connect to MongoDB Atlas using the connectToMongoDB function
  const db = await connectDB(); 

  try {
    // Use the BlogArticle model to find all documents in the "blogArticles" collection
    const newArticle = new Blog(article);
    const savedArticle = await newArticle.save();
    console.log(savedArticle);
    // Return the fetched articles
    return savedArticle
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    // Return an empty array or handle the error as needed
    return null
  } finally {
    // Close the MongoDB connection
    db.connection.close();
  }
}