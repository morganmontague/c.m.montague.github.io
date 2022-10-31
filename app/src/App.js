import AlbumCard from "./components/album_card";
import Button from "./components/button";
import background from './IMG/ticToc.png';
import background2 from './IMG/weather.png';



function App() {
  return (
   <div>
      <h1>Morgan's Blog</h1>
      <Button text={'Click Me'} />
         <div className="row">
         <AlbumCard Title={'Tic Tac Toe'} gitLink={'https://morganmontague.github.io/tictac/'} imgBack={background} />
         <AlbumCard Title={'Weather App'} gitLink={"https://morganmontague.github.io/sandbox-weather/"} imgBack={background2} />
         <AlbumCard Title={'Read my Mind'} gitLink={"https://morganmontague.github.io/sandbox-read-my-mind/"} imgBack={background} />
      </div>
   </div> 

    )
}

export default App;
