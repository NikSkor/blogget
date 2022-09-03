import React from 'react';
import PropTypes from 'prop-types';
import {useBest} from '../hooks/useBest';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const postsArray = useBest();
  return (
    <postsContext.Provider value={postsArray}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
