import React, { useEffect, useState, useRef } from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsContainer from "../components/SearchResultsContainer";
import { useLocation } from "react-router-dom";
import SearchLoadingPage from "../components/SearchLoadingPage";
import Header from "../components/Header";

export default function Search() {

  const [dataNumber, setDataNumber] = useState(0)
  const [dataCounter, setDataCounter] = useState(0)
  const [reveal, setReveal] = useState(false)

  let location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  const search = decodeURIComponent(searchParams.get("q"));

  useEffect(() => {
    console.log(search)
    document.body.style.overflowY = "hidden";
  }, [])

  useEffect(() => {
    console.log("Search : " + search)
    console.log("Reveal : " + reveal)
    setReveal(false)
    setDataCounter(0)
    setDataNumber(0)
  }, [search])

  // useEffect(() => {
  //   console.log("Data number : " + dataNumber)
  // }, [dataCounter])

  // useEffect(() => {
  //   console.log("Data counter : " + dataCounter)
  // }, [dataNumber])

  // useEffect(() => {
  //   console.log("Data counter : " + dataCounter + " - Data number : " + dataNumber + " - " + (dataCounter == 0 || dataCounter <= dataNumber))
  // }, [dataCounter, dataNumber])


  const handleDataUpdate = (counter) => {
    setDataCounter(counter)
    if (counter >= dataNumber && dataNumber != 0) {
      console.log("Counter finished !")
      setTimeout(() => {
        setReveal(true)
        console.log("Reveal !")
        document.body.style.overflowY = "scroll";
      }, 2000)
    }
  }

  // useEffect(() => {
  //   console.log("Counter number : -----------------------------------------------------------")
  //   console.log(dataCounter >= dataNumber)
  //   console.log("dataCounter : " + dataCounter)
  //   console.log("dataNumber : " + dataNumber)
  // }, [dataCounter, dataNumber])

  return (
    <div className="search">
      {!reveal && <SearchLoadingPage loaderCounter={dataCounter} animation={(dataCounter >= dataNumber) && dataNumber != 0} key={search + "Loading"} />}
      {/* {dataCounter != dataNumber || dataCounter == 0 && <p style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>HELLO</p>} */}
      <Header className={"active"}>
        <SearchBar />
      </Header>
      {/* <header className="active">
      </header> */}
      <SearchResultsContainer search={search} key={search + "Container"} handleDataUpdate={handleDataUpdate} setDataNumber={setDataNumber} />
    </div>
  );
}