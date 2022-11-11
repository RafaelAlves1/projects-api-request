import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Rafael Alves | ' + props.title;
  }, [props]);
  return <></>;
};

export default Head;
