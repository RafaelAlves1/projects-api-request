import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/api';

const Details = () => {
  const { id } = useParams();

  const [detail, setDetail] = React.useState({});

  React.useState(() => {
    api.get(`/pokemon/${id}`).then((res) => console.log(res.data));
  }, []);

  console.log(id);

  return <div>Details</div>;
};

export default Details;
