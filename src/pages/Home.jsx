import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {

    const navigate = useNavigate();

  return (
    <section className='sectionclass'>

      <h1>Welcome to Dashboard</h1> 

      <article>
      <h1>Calculator</h1>
      <p>You can use this as a Calculator</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/calculator')}>View</button>
      </article>
      
      <article>
      <h1>Clock</h1>
      <p>You can use this as a Clock</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/clock')}>View</button>      
      </article>
      
      <article>
      <h1>Drum</h1>
      <p>You can use this as a Drum</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/drum')}>View</button>
      </article>
      
      <article>
      <h1>Markdown</h1>
      <p>You can use this as a Markdown</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/markdown')}>View</button>
      </article>
      
      <article>
      <h1>Quote</h1>
      <p>You can use this as a Quote</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/quote')}>View</button>
      </article>

    </section>
  );
}

export default Home;