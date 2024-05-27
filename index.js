const arrayOfGarbage = [
  'тест',
  'опрос',
  'реклам',
  'голос',
  'анкет',
  'исследован'
];

window.onload = () => {
  const collectionOfPosts = document.querySelectorAll('.feed-item-wrap');
  const garbageRegex = new RegExp(arrayOfGarbage.join('|'), 'i');
  collectionOfPosts.forEach((singleCollection) => {
    const wrapText = singleCollection.querySelector('.feed-post-text').textContent;
    if (garbageRegex.test(wrapText)) {
      singleCollection.style.display = 'none';
    }
  });
}
