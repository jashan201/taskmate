import React from 'react';
import Button from './Button';

function Banner (props) {
    return (
        <div className='banner'>
            <div className='titles'>
              <section>
                  <h2>{props.heading}</h2>
                  <h1>{props.h1}</h1>
                  <h3>{props.h3}</h3>
              </section>
              <div className='buttons'>
              <Button dark={props.dark} />
              </div>
            </div>
            <div className='image'>
            <img src="../media/flower-img.png" alt="plant" />
            </div>
        </div>
    );
}

export default Banner;