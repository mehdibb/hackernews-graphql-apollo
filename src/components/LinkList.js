import React from 'react';
import Link from './Link';
import {useQuery, gql} from '@apollo/client';


const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

function LinkList() {
  const {data} = useQuery(FEED_QUERY);
  
  return (
    <div>
      {data?.feed.links.map((link) => (
        <Link key={link.id} link={link}/>
      )) || 'Loading...'}
    </div>
  )
}

export default LinkList;