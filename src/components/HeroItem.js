/**
 * Created by Wilfredo on 08/01/2017.
 */
import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Modal from './modal';

const HeroItem = (info) => {
  console.log('info ', info.info.thumbnail.path);

  const comicItems = info.info.comics.items.map((data) =>{
    console.log('info.info.comics ', data);
    // return <a href={data.resourceURI}>{data.name}</a>
    if (data)
      return  <Modal data={data} key={data.name}/>;

    return false;

  });

  return (
    <div>

      <div className="container">
        <Row>
          <Col xs={6} md={3}>
            <img src={info.info.thumbnail.path+`/standard_xlarge.jpg`} alt="Testing" className="img-circle"/>
          </Col>
          <Col xs={6} md={9}>
            <h3>{info.info.name}</h3>
            <p>{info.info.description}</p>
            <h3>Related comics</h3>
            {comicItems}
          </Col>
        </Row>
      </div>
    </div>
  )
};


//name={data.name} description={data.description} id={data.id}
//comics={data.comics} img={data.thumbnail.path}

export default HeroItem;