import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button, ButtonGroup } from 'react-bootstrap';
import Loaders from './Utilities/loaders';

const Collection = (props) => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isCanselled = false;
    if (isCanselled === false) {
      setLoading(true);
      Axios({
        method: 'GET',
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    // clean up render (function)
    return () => {
      isCanselled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    option === '+' ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3>{limit} collection</h3>
      <Carousel>
        {/* Carousel items start */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={data.url} alt="First slide" height={350} weight={250} />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/* Carausel items end */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
        <Button disabled={limit <= 1} onClick={() => handleLimit('-')} variant="danger">-</Button>
        <Button onClick={() => handleLimit('+')} variant="primary">+</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collection;
