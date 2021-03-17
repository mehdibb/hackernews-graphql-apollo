import React, {useCallback, useState} from 'react';
import {gql, useMutation} from '@apollo/client';
import { useHistory } from 'react-router';


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

function CreateLink() {
  const [formState, setFormState] = useState({
    description: '',
    url: '',
  });

  const history = useHistory();
  
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    onCompleted: () => history.push('/'),
  })

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    createLink();
  }, [createLink]);
  
  return (
    <div>
      <form
        onSubmit={handleSubmit}  
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(event) => {
              setFormState({
                ...formState,
                description: event.target.value,
              })
            }}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(event) => {
              setFormState({
                ...formState,
                url: event.target.value,
              })
            }}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateLink;