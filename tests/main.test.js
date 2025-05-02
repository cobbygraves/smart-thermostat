const {
  rooms,
  generateRooms,
  decreaseTempHandler,
  increaseTempHandler
} = require('../main')

//testing room AC's are generated correctly
test('4 rooms are generated on initial load', () => {
  function setupDOM() {
    document.body.innerHTML = ''
    document.body.innerHTML = `<h1 id="temp"></h1><div class="rooms-control animate__animated animate__fadeIn"></div>`
  }

  setupDOM()

  const currentTemp = document.querySelector('#temp')
  currentTemp.textContent = `${rooms[0].currTemp}°`
  const roomsControlDiv = document.querySelector('.rooms-control')
  generateRooms()
  expect(roomsControlDiv.children).toHaveLength(4)
})

//testing current temperature shows correctly
test('increase temperature thrice shows correct current temperature', () => {
  function setupDOM() {
    document.body.innerHTML = ''
    document.body.innerHTML = `<h1 id="temp"></h1><p class="currentTemp"></p><div class="buttons">
              <button id="reduce">
                <ion-icon size="large" name="remove-outline"></ion-icon>
              </button>
              <button id="increase">
                <ion-icon size="large" name="add-outline"></ion-icon>
              </button>
            </div> `
  }

  setupDOM()


  const currentTemp = document.querySelector('#temp')
  currentTemp.textContent = `${rooms[0].currTemp}°` // Set initial value
  const increaseTempButton = document.querySelector('#increase')
  increaseTempButton.addEventListener('click', increaseTempHandler)
  increaseTempButton.dispatchEvent(new Event('click'))
  increaseTempButton.dispatchEvent(new Event('click'))
  increaseTempButton.dispatchEvent(new Event('click'))
  expect(currentTemp.textContent).toBe('32°')
})

//testing current temperature shows correctly
test('decrease temperature twice shows correct current temperature', () => {
  function setupDOM() {
    document.body.innerHTML = ''
    document.body.innerHTML = `<h1 id="temp"></h1><p class="currentTemp"></p><div class="buttons">
              <button id="reduce">
                <ion-icon size="large" name="remove-outline"></ion-icon>
              </button>
              <button id="increase">
                <ion-icon size="large" name="add-outline"></ion-icon>
              </button>
            </div> `
  }

  setupDOM()

  const currentTemp = document.querySelector('#temp')
  const decreaseTempButton = document.querySelector('#reduce')
  decreaseTempButton.addEventListener('click', decreaseTempHandler)
  decreaseTempButton.dispatchEvent(new Event('click'))
  decreaseTempButton.dispatchEvent(new Event('click'))
  expect(currentTemp.textContent).toBe('30°')
})
