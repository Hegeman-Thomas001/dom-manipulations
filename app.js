
const btn = document.querySelector('#btn');
const contentDiv = document.querySelector('#content');

function addContent() {
  if (contentDiv.childNodes.length === 0) {
    const headingOne = document.createElement('h1');
    headingOne.textContent = 'Main Content Heading';

    const sectionOne = document.createElement('section');
    const paraOne = document.createElement('p');
    paraOne.textContent = 'First paragraph in the first section.';
    sectionOne.appendChild(paraOne);

    contentDiv.appendChild(headingOne);
    contentDiv.appendChild(sectionOne);
  }

}

btn.addEventListener('click', addContent);
