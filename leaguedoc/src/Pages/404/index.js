import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Page404() {
    return(
      <PageDefault>
        <h1>Pagina Inesistente</h1>
        
        <p>
        <iframe src="https://editor.p5js.org/Vinicius_Farias/embed/eE7wIGrLo"></iframe>
        </p>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
  }

export default Page404;