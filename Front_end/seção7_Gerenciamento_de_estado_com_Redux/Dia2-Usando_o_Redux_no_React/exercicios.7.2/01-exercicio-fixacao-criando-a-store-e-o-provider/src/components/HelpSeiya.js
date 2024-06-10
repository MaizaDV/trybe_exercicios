import React from 'react';

class HelpSeiya extends React.Component {
  constructor() {
    super();
    this.seiya = this.seiya.bind(this);
  }

  seiya() {
    const seiyaUrl =
      'https://content-assets.betrybe.com/prod/92881171-a5c8-4bb2-9f10-05ed823dd61e-hurt-seiya.png';
    return (
      <div>
        <img src={seiyaUrl} width="200px" alt="Seiya de Pégasus" />
      </div>
    );
  }

  render() {
    return <div className="help">{this.seiya()}</div>;
  }
}

export default HelpSeiya;
