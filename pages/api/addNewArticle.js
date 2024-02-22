import connectDB from './database';
import Blog from './blogArticleModel';

const article = {
  title: "Déjà Vu: Unraveling the Mysteries of Familiar Unfamiliarity",
  date: "February 22, 2024",
  genre:"Science and Nature",
  sections: [
    {
      title: "Introduction",
      content: `
        <p>Déjà vu, the curious phenomenon where one feels an uncanny sense of familiarity with a situation or place, even though it seems entirely new. This mysterious experience has puzzled scientists, philosophers, and the general public for centuries. In this article, we delve into the intricacies of déjà vu, exploring its potential explanations, neurological basis, and the fascinating questions it raises about the nature of consciousness.</p>
      `,
    },
    {
      title: "Déjà Vu Defined",
      content: `
        <p>Déjà vu, a French term meaning "already seen," describes the sensation of having lived through a particular moment before, even when encountering it for the first time. Individuals often report a strong feeling of recognition, as if they are reliving a fragment of their past in the present moment. This phenomenon can range from fleeting sensations to more prolonged and intense experiences.</p>
      `,
    },
    {
      title: "Neurological Underpinnings",
      content: `
        <p>Researchers have delved into the brain's mechanisms to unravel the mystery of déjà vu. Some theories suggest that déjà vu may arise from a temporary glitch in the brain's memory processes. The brain, in essence, may incorrectly signal that a current experience is a repetition of a past one, creating a profound sense of familiarity. Neuroimaging studies have provided insights into the regions of the brain associated with déjà vu, shedding light on the intricate dance of memory and perception.</p>
      `,
    },
    {
      title: "Psychological Perspectives",
      content: `
        <p>
        <img src="/deja-vu/img1.jpg" alt="clock decaying"/>
        Psychologists offer alternative explanations for déjà vu, considering factors such as memory recall, attention, and cognitive processing. Some theories propose that déjà vu occurs when there is a mismatch between the speed at which information is processed by the brain's different regions, creating a sense of temporal distortion. Others explore the role of memory retrieval errors, suggesting that similar situations may trigger fragments of forgotten memories, contributing to the eerie familiarity.</p>
      `,
    },
    {
      title: "Déjà Vu in Culture and History",
      content: `
        <p>Déjà vu has left its imprint on art, literature, and cultural narratives throughout history. Writers and artists often use the phenomenon to convey a sense of the surreal or to explore themes of time and identity. Cultural perspectives on déjà vu vary, with some viewing it as a mere quirk of the mind and others attributing it to mystical or supernatural forces.</p>
      `,
    },
    {
      title: "The Quantum Enigma",
      content: `
        <p>Intriguingly, some theories on the fringes of science invoke quantum mechanics to explain déjà vu. Concepts such as parallel universes and non-linear time suggest that déjà vu could be glimpses into alternate realities or previous iterations of our own existence. While these ideas remain speculative, they add an extra layer of mystery to the phenomenon.</p>
      `,
    },
    {
      title: "Déjà Vu and Memory Disorders",
      content: `
        <p>Déjà vu is not limited to the general population; it has also been studied in individuals with certain memory disorders. Exploring déjà vu in clinical settings provides additional insights into the complex relationship between memory, perception, and the brain's intricate workings.</p>
      `,
    },
    {
      title: "Conclusion",
      content: `
        <p>Déjà vu continues to captivate our imaginations and challenge our understanding of consciousness. Whether viewed through the lens of neuroscience, psychology, or speculative physics, the phenomenon remains a tantalizing enigma. As scientists unravel the mysteries of déjà vu, we find ourselves on a journey through the intricate landscapes of memory, perception, and the ever-evolving exploration of the human mind.</p>
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