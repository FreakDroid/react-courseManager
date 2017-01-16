/**
 * Created by Wilfredo on 15/01/2017.
 */
import React from 'react';

class Mylist extends React.Component{
  /*constructor(prop){
    super(prop);
  }*/


  handleComic(){

  }

  render (){
    return(
      <div>
        {localStorage.getItem('testObject')}
      </div>
    )
  }

}

export default Mylist