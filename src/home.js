import './assets/css/reset.css';
import './assets/css/style.css';

function home() {
  const div = document.createElement('div');
  div.classList.add('home-wrap');

  const divTwo = document.createElement('div');

  const createHeading = (headingTag, headingText) => {
    const heading = document.createElement(headingTag);
    heading.textContent = headingText;
    return heading;
  };

  const h2 = createHeading('h2', 'Welcome');
  const h1 = createHeading('h1', 'Cafe Terezie');
  const h3 = createHeading('h3', 'OPENING SOON!');

  divTwo.appendChild(h2);
  divTwo.appendChild(h1);
  divTwo.appendChild(h3);

  div.appendChild(divTwo);

  // document.querySelector('#content').appendChild(div);
  return div; // append div to div#content in here or in index.js?
}

export default home;
