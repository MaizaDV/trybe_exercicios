// /src/components/Album.js
// Código refatorado do ../App.js
import React from 'react';

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <section>
        <img src={ album.image } alt={ album.title } />
        <h2>{ album.title }</h2>
        <p>{ album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ album.releaseDate.day }/${ album.releaseDate.month }/${ album.releaseDate.year }` }
        </p>
        <p>Gravadora: { album.others.recordCompany }</p>
        <p>Formatos: { album.others.formats }</p>
      </section>
    );
  }
}

export default Album;
