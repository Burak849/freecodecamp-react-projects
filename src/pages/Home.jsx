import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {

    const navigate = useNavigate();
//TAMAMLANDIGINDA 3.ADRESE MONSTER EKLENECEK
  return (
    <section className='sectionclass'>

      <h1>Welcome to Dashboard</h1> 

      <article>
      <h1>Calculator</h1>
      <p>You can use this as a Calculator</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/calculator')}>View</button>
      </article>

      <article style={{gap:'0.7rem'}}>
      <h1>Random Background</h1>
      <p style={{fontSize:'0.9em'}}>You can use this as a Background Changer</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/randombg')}>View</button>
      </article>
      
      <article>
      <h1>Monster</h1>
      <p>You can use this as a Monster</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/')}>View</button>
      </article>

      <article>
      <h1>Drum</h1>
      <p>You can use this as a Drum</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/drum')}>View</button>
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
