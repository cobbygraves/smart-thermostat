require()

const { generateRooms, rooms } = require('../main')
const { default: expect } = require('expect')

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
