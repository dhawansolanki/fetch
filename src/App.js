
import './App.css';
import {useQuery, gql} from '@apollo/client';

import Posts from "./posts"
import Slug from "./slug"
import { GraphQLClient } from 'graphql-request';
const hygraph = new GraphQLClient(
  'https://api-ap-south-1.hygraph.com/v2/cl5wc0itv0z6101uk0asl9dvk/master'
);




function App() {
  return(
   <Posts />
    // <Slug />
  )
}

export default App;
