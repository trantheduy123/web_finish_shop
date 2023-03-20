import React from "react";
import "../CSS/slider.css";

export default function Slider() {
  return (
    <div>
      <div>
        <h1 className='slider-title'>About men's clothes</h1>
      </div>
      <ul className='grid'>
        <li>
          <img
            src='https://i.pinimg.com/564x/b1/2b/d6/b12bd6021c355433a9c0ca2fabdc8cfa.jpg'
            alt=''
          />
          <span className='description'>DON’T SHY AWAY FROM COLOUR</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/736x/0d/64/14/0d64145c56a53e2886274bf99a10d7d0.jpg'
            alt=''
          />

          <span className='description'>WEAR A SUIT WELL</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/564x/09/23/41/09234131275aa516a028db663c47642b.jpg'
            alt=''
          />
          <span className='description'>Listen To Me</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/564x/c2/2c/04/c22c042f31ba524e832a3b2f19b22bd4.jpg'
            alt=''
          />
          <span className='description'>KNOW WHEN TO BREAK THE RULES</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/564x/1f/7e/56/1f7e5633a1b11161269d2d6fccf799e2.jpg'
            alt=''
          />
          <span className='description'>Another Plant?</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/564x/65/d7/5b/65d75b4655ca87119f236dad2b1c679c.jpg'
            alt=''
          />
          <span className='description'>LOOK AFTER YOUR APPEARANCE</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/564x/f2/f3/9d/f2f39d72614c4adddd7d25ef2dcfe941.jpg'
            alt=''
          />
          <span className='description'>KEEP ACCESSORISING TO A MINIMUM</span>
        </li>
        <li>
          <img
            src='https://i.pinimg.com/564x/43/d3/b2/43d3b286fa87eff2975467970a3ceb2f.jpg'
            alt=''
          />
          <span className='description'>KNOW THYSELF</span>
        </li>
      </ul>
    </div>
  );
}
