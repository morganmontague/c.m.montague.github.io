import AlbumCard from "./components/album_card";
import Button from "./components/button";


let ticTac = 'https://morganmontague.github.io/tictac/'

function App() {
  return (
   <div>
      <h1>Morgan's Blog</h1>
      <Button text={'Click Me'} />
         <div className="row">
         <AlbumCard Title={'Tic Tac Toe'} gitLink={'https://morganmontague.github.io/tictac/'} />
      </div>
   </div> 

    )
}

export default App;
