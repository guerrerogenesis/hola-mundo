import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  return (
    <>  
      <TwitterFollowCard username={"GeneGuerrero"} name={"Genesis Guerrero"} hasFollow={true} />
      <TwitterFollowCard username={"ciruelo"} name={"Ciruelo Cruz Guerrero"} hasFollow={false}/>
      <TwitterFollowCard username={"midudev"} name={"Miguel Angel Duran"} hasFollow={false}/>
    </>
  );
}

export default App;
