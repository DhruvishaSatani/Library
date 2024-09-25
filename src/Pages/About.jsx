import React from 'react';
import aboutImg from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className='py-[3rem]'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content gap-[4rem] grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = ""  className='max-w-[520px]'/>
          </div>
          <div className='about-text'>
            <h2 className='about-title my-[1rem] text-[2.6rem] '>About BookHub</h2>
            <p className='text-[1.7rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</p>
            <p className='text-[1.7rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
