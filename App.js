import React from 'react';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer'
function App() {
  return (
    <div className='App'>
      <div className="container">
        <Header/>
      </div >
      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
