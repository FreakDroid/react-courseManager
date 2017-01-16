/**
 * Created by Wilfredo on 08/01/2017.
 */
import React from 'react';
import HeroItem from './HeroItem';

import Mylist from './myList'

import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


const HeroList = (props) => {
  console.log('testing ', props);
  const heroItems = props.heroes.map((data) =>{
    console.log('data ', data);
    return <HeroItem key={data.id} info={data}/>
  });

  return(
    <div>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            {heroItems}
          </Col>
        </Row>
      </Grid>
    <Mylist />
    </div>
  );
};

export default HeroList;