import './App.css';
import AcessarOEstadoDeUmComponente from './01-AcessarOEstadoDeUmComponente';
import AtualizarMeuEstadoComBaseNoEstadoAnterior from './02-AtualizarMeuEstadoComBaseNoEstadoAnterior';
import SintaxePublicClassFields from './03-SintaxePublicClassFields';

function App() {
  return (
    <div className="App">
      <AcessarOEstadoDeUmComponente />
      <AtualizarMeuEstadoComBaseNoEstadoAnterior />
      <SintaxePublicClassFields />
    </div>
  );
}

export default App;
