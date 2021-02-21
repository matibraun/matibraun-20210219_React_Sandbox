import Mensaje from './Mensaje'
import Boton from './Boton'
import Boton2 from './Boton2'
import Adivinador from './Adivinador'
import CounterManager from './Counter'


function App() {
  return (
    <div>
      <CounterManager/>
      <Mensaje contenido={'chausisis'}/>
      <Boton/>
      <Mensaje contenido={'hoolisss'}/>
      <Boton2 utilidad={'agrandame y achicame'}/>

      <Adivinador />
    </div>
  );
}

export default App;
