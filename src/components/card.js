import axios from "axios";
const Card = ({ headline, authorPhoto, authorName }) => {


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const container = document.createElement('div');
  container.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = headline;
  container.appendChild(headlineDiv);

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  container.appendChild(authorDiv);

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-container');
  authorDiv.appendChild(imgDiv);

  const img = document.createElement('img');
  img.src = authorPhoto;
  imgDiv.appendChild(img);

  const span = document.createElement('span');
  span.textContent = `By ${authorName}`;
  authorDiv.appendChild(span);

  container.addEventListener('click', ()=>{
    console.log(headline);
  });
  
  return container;
}

const cardAppender = (selector) => {
 
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp =>{
      console.log(resp)
      const container = document.querySelector(selector);
      

     for(const article in resp.data.articles){
       
        const articles = resp.data.articles[article];
        for(let i = 0; i < articles.length; i++){
          const card = Card(articles[i]);
          container.appendChild(card);
        }
        
      }
     })


  //   })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
