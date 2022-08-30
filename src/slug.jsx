// --------------------------------------------------------

//import logo from './logo.svg';
import {useQuery, gql} from '@apollo/client';
//import react , {useState} from 'react';

import { GraphQLClient } from 'graphql-request';
const hygraph = new GraphQLClient(
  'https://api-ap-south-1.hygraph.com/v2/cl5wc0itv0z6101uk0asl9dvk/master'
);


export const Query = gql`
{
  posts(where: {slug: "what-are-dapps-how-they-are-different-from-normal-apps"}, stage: PUBLISHED) {
    title
    author {
      id
      name
    }
    category {
      id
      name
    }
    content
    createdAt
    featuredImage
    featuredPost
    slug
  }
}
`;

function Slug() {
  const { posts } =  hygraph.request(Query)

  const {loading, error, data} = useQuery(Query);
    
  if(loading) return(<> Loading</>);
  if(error) return(<>{JSON.stringify(error)}</>)
  
  return (
   <div className="container"> 
     <h1>Posts 🐈 </h1>
     <hr width="80%" />

{data?.posts.map(post => (
     <>
   <div className="card" >
      
      <div> 
         <h1>{post.title} </h1>
           <div className="episodes" >ID : <b>{post.id} </b></div>
          <div  dangerouslySetInnerHTML={{__html: post.description}} ></div> 
          <h3>Author : {post.author.name} </h3>
          <h3>Excerpt : {post.excerpt} </h3>
          <a href={post.slug}>Slug : {post.slug} </a>
          <h3>Tags : {post.tags}</h3>
          <h3>Category : {post.category.name}</h3>
          <h3>Date : {post.customPublicationDate}</h3>
      </div> 
  </div>
  <hr width="75%"/>
 </>
   ))}
  
   </div>);
}

export default Slug;
