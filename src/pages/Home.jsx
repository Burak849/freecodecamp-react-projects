import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {

    const navigate = useNavigate();
//TAMAMLANDIGINDA 3.ADRESE MONSTER EKLENECEK
  return (
    <section>

      <h1>Welcome to Dashboard</h1> 

      <article>
      <h1>Calculator</h1>
      <p>You can use this as a Calculator</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/calculator')}>View</button>
      </article>

      <article>
      <h1>Sorter</h1>
      <p>You can use this as a Sorter</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/sorter')}>View</button>
      </article>

      <article>
      <h1>Football Teams</h1>
      <p>You can use this as a Football player cards</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/teams')}>View</button>
      </article>

      <article>
      <h1>Spam Finder</h1>
      <p>You can use this as a Spam Finder</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/spamfinder')}>View</button>
      </article>

      <article>
      <h1>Binary Converter</h1>
      <p>You can use this as a Binary Converter</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/binaryconverter')}>View</button>
      </article>

      <article>
      <h1>To-Do App</h1>
      <p>You can use this as a To-Do App</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/todoapp')}>View</button>
      </article>

      <article>
      <h1>Music</h1>
      <p>You can use this as a Calculator</p>
      <button type='button' className='buttonclass'  onClick={() => navigate('/music')}>View</button>
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
