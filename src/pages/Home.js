import React, { useEffect, useState } from "react";
import Accueil from "../components/Accueil";
import HomeHeader from "../components/HomeHeader";
// import SearchBar from "../components/SearchBar";
import HomeNewsContainer from "../components/HomeNewsContainer";
import HomeSearchbar from "../components/HomeSearchbar";
import BarLoader from "../components/BarLoader";

export default function Home() {

  const [dataNumber, setDataNumber] = useState(0)
  const [dataCounter, setDataCounter] = useState(0)
  const [animationLoaded, setAnimationLoaded] = useState(false)

  const handleDataUpdate = (counter) => {
    // console.log("HandleDataUpdate ! " + counter)
    setDataCounter(counter)
  }

  // useEffect(() => {
  //   console.log("Data Counter from useEffect : " + dataCounter)
  // }, [dataCounter])

  useEffect(() => {
    // console.log("UseEffect héhé")
    setTimeout(() => {
      window.scrollTo({
        "left": 0,
        "top": 0,
        "behavior": "instant"
      })
    }, 0);
    document.body.style.overflowY = "hidden";
    const setScroll = setTimeout(() => {
      setAnimationLoaded(true)
      console.log("Animation laoded !")
    }, 1000)

    return () => {
      clearTimeout(setScroll)
    };
  }, []);

  useEffect(() => {
    if (animationLoaded && dataCounter >= dataNumber) {
      document.body.style.overflowY = "scroll";
    }
  }, [dataCounter, animationLoaded])

  return (
    <div className="home">
      <Accueil>
        {
          animationLoaded && dataCounter < dataNumber && <BarLoader loaderCounter={dataCounter} />
        }
      </Accueil>
      <HomeHeader />
      <HomeSearchbar isLoaded={dataCounter >= dataNumber} />
      <HomeNewsContainer handleDataUpdate={handleDataUpdate} setDataNumber={setDataNumber} />
    </div>
  );
}