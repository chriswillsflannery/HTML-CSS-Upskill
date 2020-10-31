const increment = () => {

  const container = document.querySelector('.container');
  const clickedTimesElement = document.querySelector('#clickedTimes');
  const clickedTimes = clickedTimesElement.innerHTML;
  
  const newClickedTimesElement = document.createElement('p');
  const newClickedTimes = +clickedTimes + 1;
  newClickedTimesElement.setAttribute('id', 'clickedTimes');
  newClickedTimesElement.innerHTML = newClickedTimes;

  container.removeChild(clickedTimesElement);
  container.appendChild(newClickedTimesElement);
}