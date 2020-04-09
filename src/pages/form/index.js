import React, {useState} from 'react';
import { Prompt, Link } from 'react-router-dom';

function App() {
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <div className='App'>
      <div className='App-header'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
        <form
          onSubmit={event => {
            event.preventDefault();
            event.target.reset();
            setIsBlocking(false);
          }}
          >
          <Prompt
            when={isBlocking}
            message={location =>
              `Deseja ir para a página ${location.pathname} ?`
            }
          />

          <p>
            Blocking?{' '}
            {isBlocking ? 'Sim, clique em um link ou no botão de submmit' : 'Nope'}
          </p>

          <p>
            <input
              size='50'
              placeholder='Escreva algo para bloquear transição de páginas'
              onChange={event => {
                  setIsBlocking(event.target.value.length > 0);
              }}
            />
          </p>

          <p>
            <button>Clique para parar bloqueio</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
