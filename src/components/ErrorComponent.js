import React from 'react';
import oops from '../img/Oops.png';

function Error(){
  return(
    <section>
      <img src={oops} alt='Oops' style={{height:'300px'}}/>
    </section>
  );
}

export default Error
