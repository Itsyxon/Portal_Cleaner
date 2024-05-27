const arrayOfGarbage = [
  'опрос',
  'реклама',
  'голосование',
  'проголосовать',
  'проголосуйте',
  'участие',
  'тест',
  'просим',
  'набор',
  'анкету',
  'анкета',
  'анкеты',
  'голосовании',
  'опроса',
  'опросов',
  'участия',
  'участие',
  'опросы',
  'пройдите',
  'пройти',
  'исследование',
  'исследовании',
  'исследованию'
]

window.onload = () => {
  const collectionOfPosts = document.querySelectorAll('.feed-item-wrap')
  collectionOfPosts.forEach((singleCollection) => {
    const wrapText = singleCollection.querySelector('.feed-post-text').textContent.toLowerCase().replace(',', '').replace('.', '').split(' ')
    console.log(wrapText)
    wrapText.forEach((singleText) => {
        if(arrayOfGarbage.includes(singleText)) {
            singleCollection.style.display = 'none'
        }
    })
  })
}

