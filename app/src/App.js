import AlbumCard from "./components/album_card";
import Button from "./components/button";
import background from './IMG/ticToc.png';
import background2 from './IMG/weather.png';
import SingleAccordion from "./components/accordian";



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
      <div className="accordion accordion-flush" id="blogAccordian">
         <SingleAccordion accordionTitle = {"Week 1"} accordionText={"Testing1"} />
         <SingleAccordion accordionTitle = {"Week 2"} accordionText={"Testing2"} />
         <SingleAccordion accordionTitle = {"Week 3"} accordionText={"Testing3"} />
         <SingleAccordion accordionTitle = {"Week 4"} accordionText={"Testing4"} />
         <SingleAccordion accordionTitle = {"Week 5"} accordionText={"Testing5"} />
         <SingleAccordion accordionTitle = {"Week 6"} accordionText={"Testing6"} />
         <SingleAccordion accordionTitle = {"Week 7"} accordionText={"What are some similarities and differences you can see with JS and Python. If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited? Think of a project or tech based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now and could you see yourself enjoying building something like that in the future? "} />
      </div> 
   </div> 

    )
}

export default App;
