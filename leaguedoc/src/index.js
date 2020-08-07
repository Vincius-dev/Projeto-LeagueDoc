import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import PageDefault from './components/PageDefault';
import { Link } from 'react-router-dom';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Video'; 
import CadastroCategoria from './Pages/Cadastro/Categoria';

const Pagina404 = () => (<div>
      <PageDefault>
        <h1>Pagina Inesistente</h1>
        
        <p>
        <iframe src="https://editor.p5js.org/Vinicius_Farias/embed/eE7wIGrLo" height="600px" width="100%" title="Jogo"></iframe>
        </p>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route path="" component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
