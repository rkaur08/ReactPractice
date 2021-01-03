import React from "react";
import ReactDom from "react-dom";

import './index.css'
const firstBook = {

title : 'I Love You to the Moon and Back',
author : 'Amelia Hepworth and Tim Warnes',
img : 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg' 
}

const secondBook = {

title : 'Our Class is a Family',
author : 'Shannon Olsen and Sandie Sonke',
img : 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg' 
}

function Booklist() {
  return (
    <section className = 'booklist'>
      <Book img = {firstBook.img} 
      title = {firstBook.title} 
      author = {firstBook.author}/>

      <Book img = {secondBook.img} 
      title = {secondBook.title} 
      author = {secondBook.author}/>
    </section>
  );
}



const Book = (props) => {
  const {img, title, author} = props
  
 
  return<article className = 'book'>
    <img src ={img} alt = ''/>
    <h1>{title}</h1>
     <h3>{author}</h3>
  </article>
}

// const Greeting = () => {
//   return React.createElement('p',{ },'hello');
// };

ReactDom.render(<Booklist />, document.getElementById("root"));
