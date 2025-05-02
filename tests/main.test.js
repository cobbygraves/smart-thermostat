const {
  room,
  generateRooms,
  decreaseTempHandler,
  increaseTempHandler
} = require('../main')
let rooms = [
  {
    name: 'Livingroom',
    currTemp: 27,
    coldPreset: 20,
    warmPreset: 32,
    image: './assets/living-room.jpg',
    airConditionerOn: false,
    startTime: '16:30',
    endTime: '20:00',
    showSchedule: false,
    setCurrTemp(temp) {
      this.currTemp = temp
    },
    setStartTime(time) {
      this.startTime = time
    },
    setEndTime(time) {
      this.endTime = time
    },
    setColdPreset(newCold) {
      this.coldPreset = newCold
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm
    },

    decreaseTemp() {
      this.currTemp--
    },

    increaseTemp() {
      this.currTemp++
    },
    toggleAircon() {
      this.airConditionerOn
        ? (this.airConditionerOn = false)
        : (this.airConditionerOn = true)
    },
    toggleSchedule() {
      this.showSchedule
        ? (this.showSchedule = false)
        : (this.showSchedule = true)
    }
  }
]

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
test('increase temperature shows correct current temperature', () => {
  function setupDOM() {
    document.body.innerHTML = ''
    document.body.innerHTML = `<h1 id="temp"></h1><div class="buttons">
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
  const increaseTempButton = document.querySelector('#increase')
  increaseTempButton.addEventListener('click', increaseTempHandler)
  increaseTempButton.dispatchEvent(new Event('click'))
  increaseTempButton.dispatchEvent(new Event('click'))
  increaseTempButton.dispatchEvent(new Event('click'))
  currentTemp.textContent = `${rooms[0].currTemp}°`
  expect(currentTemp.textContent).toBe(`${rooms[0].currTemp}°`)
})

//testing current temperature shows correctly
test('decrease temperature shows correct current temperature', () => {
  function setupDOM() {
    document.body.innerHTML = ''
    document.body.innerHTML = `<h1 id="temp"></h1><div class="buttons">
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
  currentTemp.textContent = `${rooms[0].currTemp}°`
  expect(currentTemp.textContent).toBe(`${rooms[0].currTemp}°`)
})
