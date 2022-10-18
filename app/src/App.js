import AlbumCard from "./components/album_card";
import Button from "./components/button";

let ticTac = 'https://morganmontague.github.io/tictac/'

function App() {
  return (
   <div>
      <h1>Morgan'Blog</h1>
      <Button text={'Click Me'} />
      <row>
      <AlbumCard Title={'Tic Tac Toe'} gitLink={ticTac} />
      </row>
   </div> 

    )
}

export default App;
