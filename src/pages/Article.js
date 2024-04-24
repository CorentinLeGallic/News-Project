// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // var jsdom = require('jsdom-jscore-rn');
// import { jsdom } from "jsdom-jscore-rn";
// import Readability from "@mozilla/readability";
// import axios from "axios";

// export default function Article() {

//   // Build the URL we are going request.This will get articles related to Apple and sort them newest first
//   // let url = 'https://newsapi.org/v2/everything?' +
//   //   'q=Apple&' +
//   //   'sortBy=publishedAt&' +
//   //   'apiKey=d958c4dab3fa494c924a59e95fdd1c32';

//   // Make the request with axios' get() function

//   let location = useLocation()
//   const searchParams = new URLSearchParams(location.search);

//   const search = decodeURIComponent(searchParams.get("name"));

//   useEffect(() => {
//     axios.get("https://newsapi.org/v2/everything?q=" + search + "&sortBy=relevancy&searchIn=title&apiKey=d958c4dab3fa494c924a59e95fdd1c32&language=fr&pageSize=10").then(async (r1) => {

//       // At this point we will have some search results from the API. Take the first search result...
//       let firstResult = r1.data.articles[0];
//       console.log(firstResult.url);

//       var loadHtml = function (path, callback) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', path, true);
//         xhr.onreadystatechange = function () {
//           if (this.readyState !== 4) return;
//           if (this.status !== 200) return;
//           callback(this.responseText);
//         };
//         xhr.send();
//       };

//       loadHtml(firstResult.url, function (html) {
//         console.log(html)
//         jsdom.env(html, (dom) => {
//           let article = new Readability(dom.window.document).parse();
//         });
//         // console.log(<dom className="window document"></dom>)
//         // now pass the DOM document into readability to parse
//         // let article = new Readability(dom.window.document).parse();

//         // Done! The article content is in the textContent property
//         // console.log(article.textContent);
//       });

//       // fetch('https://scrapeme.live/shop/')
//       //   .then(({ data }) => console.log(data));

//       // axios.get(firstResult.url, {
//       //   "responseType": "document"
//       // }).then((r2) => {
//       //   console.log(r2)

//       // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
//       // let dom = jsdom(firstResult.url)
//       // // let dom = new JSDOM(r2.data, {
//       // //   url: firstResult.url
//       // // });

//       // // now pass the DOM document into readability to parse
//       // let article = new Readability(dom.window.document).parse();

//       // // Done! The article content is in the textContent property
//       // console.log(article.textContent);
//       // })
//     }, [])
//   })


//   return <div>Article</div>;
// }
