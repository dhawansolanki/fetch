import logo from './logo.svg';
import './App.css';
import {useQuery, gql} from '@apollo/client';
import react , {useState} from 'react';



// query Query($page: Int) {
//   Page(page: $page) {
//     media {
//       siteUrl
//       title {
//         english
//         native
//       }
//       description
//       coverImage {
//         medium
//       }
//       bannerImage
//       volumes
//       episodes
//     }
//   }
// }


export const postsList = gql`
query ArticlesPage {
  posts(orderBy: createdAt_DESC, first: 12) {
    featuredImage
    id
    customPublicationDate
    excerpt
    publishedAt
    slug
    sponsored
    tags
    title
    content
  }
}
`;

function App() {
  const {loading, error, data} = useQuery(postsList);
    
  if(loading) return(<> Loading</>);
  if(error) return(<>{JSON.stringify(error)}</>)
  return (
   <div className="container"> 
     <h1> 🐈 posts List </h1>
     <hr width="80%" />
   {data?.Posts?.title(posts => (
     <>
   <div className="card" >
      {/* <img    src={posts.coverImage.medium}/> */}
      <div> 
         <h1>{posts.title} </h1>
           <div className="episodes" >Episodes  <b>{posts.episodes} </b></div>
          <div  dangerouslySetInnerHTML={{__html: posts.description}} ></div> 
      </div> 
  </div>
  <hr width="75%"/>
 </>
   ))}
   
   </div>);
}

export default App;
