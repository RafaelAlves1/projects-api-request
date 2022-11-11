import React from 'react';

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = 'ValorantClone | ' + title;
  }, [title]);
};

export default Head;
