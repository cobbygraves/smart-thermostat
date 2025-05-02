// Room objects
let rooms = [
  {
    name: 'Livingroom',
    currTemp: 32,
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
  },
  {
    name: 'Kitchen',
    currTemp: 29,
    coldPreset: 20,
    warmPreset: 32,
    image: './assets/kitchen.jpg',
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
      console.log(this.currTemp)
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
  },
  {
    name: 'Bathroom',
    currTemp: 30,
    coldPreset: 20,
    warmPreset: 32,
    image: './assets/bathroom.jpg',
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
  },
  {
    name: 'Bedroom',
    currTemp: 31,
    coldPreset: 20,
    warmPreset: 32,
    image: './assets/bedroom.jpg',
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

const coolOverlay = `linear-gradient(
    to bottom,
    rgba(141, 158, 247, 0.2),
    rgba(194, 197, 215, 0.1)
  )`

const warmOverlay = `linear-gradient(to bottom, rgba(236, 96, 98, 0.2), rgba(248, 210, 211, 0.13))`

const setInitialOverlay = () => {
  if (document.querySelector('.room')) {
    document.querySelector('.room').style.backgroundImage = `${
      rooms[0].currTemp < 25 ? coolOverlay : warmOverlay
    }, url('${rooms[0].image}')`
  }
}

const setOverlay = (room) => {
  if (document.querySelector('.room')) {
    document.querySelector('.room').style.backgroundImage = `${
      room.currTemp < 25 ? coolOverlay : warmOverlay
    }, url('${room.image}')`
  }
}

// Set svg accordingly
const svgPoint = document.querySelector('.point')
const angleOffset = 86
const calculatePointPosition = (currTemp) => {
  const normalizedTemp = (currTemp - 10) / (32 - 10)
  const angle = normalizedTemp * 180 + angleOffset

  const radians = (angle * Math.PI) / 180
  const radius = 116

  const translateX = radius * Math.cos(radians)
  const translateY = radius * Math.sin(radians)

  return { translateX, translateY }
}

const setIndicatorPoint = (currTemp) => {
  const position = calculatePointPosition(currTemp)
  if (svgPoint) {
    svgPoint.style.transform = `translate(${position.translateX}px, ${position.translateY}px)`
  }
  //svgPoint.style.transform = `translate(${position.translateX}px, ${position.translateY}px)`
}

// Turn all acs on
const turnAcsON = document.querySelector('#turn-on-all')

// Handle the dropdown data
const roomSelect = document.getElementById('rooms')

const currentTemp = document.getElementById('temp')

let selectedRoom = rooms[0].name

// Set default temperature
if (currentTemp) {
  currentTemp.textContent = `${rooms[0].currTemp}°`
}
// currentTemp.textContent = `${rooms[0].currTemp}°`

setInitialOverlay()
if (document.querySelector('.currentTemp')) {
  document.querySelector('.currentTemp').innerText = `${rooms[0].currTemp}°`
}
// Add new options from rooms array
rooms.forEach((room) => {
  const option = document.createElement('option')
  option.value = room.name
  option.textContent = room.name
  if (roomSelect) {
    roomSelect.appendChild(option)
  }
})

// Set current temperature to currently selected room
const setSelectedRoom = (selectedRoomName) => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoomName)
  //console.log(room)
  setIndicatorPoint(room.currTemp)

  //   set the current stats to current room temperature
  currentTemp.textContent = `${room.currTemp}°`

  // Set the current room image
  setOverlay(room)

  // Set the current room name
  document.querySelector('.room-name').innerText = selectedRoom

  document.querySelector('.currentTemp').innerText = `${room.currTemp}°`
}

if (roomSelect) {
  roomSelect.addEventListener('change', function () {
    selectedRoom = this.value
    //console.log(selectedRoom)
    setSelectedRoom(selectedRoom)
  })
}

const handlePresetTemp = (event) => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom)
  if (event.target.id === 'warm') {
    // Handle warm button click
    room.setCurrTemp(room.warmPreset)
    setIndicatorPoint(room.warmPreset)
    setIndicatorPoint(room.warmPreset)
    currentTemp.textContent = `${room.warmPreset}°`
    document.querySelector('.currentTemp').innerText = `${room.warmPreset}°`
  } else if (event.target.id === 'cool') {
    // Handle cold button click
    room.setCurrTemp(room.coldPreset)
    setIndicatorPoint(room.coldPreset)
    currentTemp.textContent = `${room.coldPreset}°`
    document.querySelector('.currentTemp').innerText = `${room.coldPreset}°`
  }
  generateRooms()
  setOverlay(room)
}

// Set preset temperatures
const defaultSettings = document.querySelector('.default-settings')
if (defaultSettings) {
  defaultSettings.addEventListener('click', handlePresetTemp)
}

const increaseTempHandler = () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom)

  // const increaseRoomTemperature = room.increaseTemp

  if (room.currTemp < 32) {
    // increaseRoomTemperature()
    room.increaseTemp()
  }

  setIndicatorPoint(room.currTemp)
  if (currentTemp) {
    currentTemp.textContent = `${room.currTemp}°`
    generateRooms()
    setOverlay(room)
    document.querySelector('.currentTemp').innerText = `${room.currTemp}°`
  }
}

// Increase temperature
if (document.getElementById('increase')) {
  document
    .getElementById('increase')
    .addEventListener('click', increaseTempHandler)
}

const decreaseTempHandler = () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom)
  // const decreaseRoomTemperature = room.decreaseTemp

  if (room.currTemp > 10) {
    // decreaseRoomTemperature()
    room.decreaseTemp()
  }
  setIndicatorPoint(room.currTemp)
  if (currentTemp) {
    currentTemp.textContent = `${room.currTemp}°`
    generateRooms()
    setOverlay(room)
    document.querySelector('.currentTemp').innerText = `${room.currTemp}°`
  }
}

//Decrease temperature
if (document.getElementById('reduce')) {
  document
    .getElementById('reduce')
    .addEventListener('click', decreaseTempHandler)
}

const inputsDiv = document.querySelector('.inputs')
//warm and cold preset event handler
const warmAndColdHandler = (event) => {
  if (event.target.id === 'save') {
    const coolInput = document.getElementById('coolInput')
    const warmInput = document.getElementById('warmInput')
    const errorSpan = document.querySelector('.error')

    if (coolInput.value && warmInput.value) {
      // Validate the data
      if (coolInput.value < 10 || coolInput.value > 24) {
        errorSpan.style.display = 'block'
        errorSpan.innerText = 'Enter valid temperatures (10° - 32°)'
        return
      }

      if (warmInput.value < 25 || warmInput.value > 32) {
        errorSpan.style.display = 'block'
        errorSpan.innerText = 'Enter valid temperatures (10° - 32°)'
        return
      }
      // Validation passed
      // Set current room's presets
      const currRoom = rooms.find((room) => room.name === selectedRoom)

      currRoom.setColdPreset(coolInput.value)
      currRoom.setWarmPreset(warmInput.value)

      coolInput.value = ''
      warmInput.value = ''
      errorSpan.style.display = 'none'
    }
  }
}

if (inputsDiv) {
  inputsDiv.addEventListener('click', warmAndColdHandler)
}

// Toggle preset inputs

const showHidePreset = () => {
  if (inputsDiv.classList.contains('hidden')) {
    inputsDiv.classList.remove('hidden')
  }
}

if (document.getElementById('newPreset')) {
  document.getElementById('newPreset').addEventListener('click', showHidePreset)
}

// close inputs
if (document.getElementById('close')) {
  document.getElementById('close').addEventListener('click', () => {
    const coolInput = document.getElementById('coolInput')
    const warmInput = document.getElementById('warmInput')
    const errorSpan = document.querySelector('.error')

    errorSpan.style.display = 'none'
    inputsDiv.classList.add('hidden')

    coolInput.value = ''
    warmInput.value = ''
  })
}

// Generate rooms
const generateRooms = () => {
  const roomsControlContainer = document.querySelector('.rooms-control')
  let roomsHTML = ''

  rooms.forEach((room) => {
    roomsHTML += `
    <div class="room-control" id="${room.name}">
          <div class="top">
            <h3 class="room-name">${room.name} - ${room.currTemp}°</h3>
           
            <button class="schedule-btn"><ion-icon name="time-outline"></ion-icon></button>
           
            <button class="switch">
              <ion-icon name="power-outline" class="${
                room.airConditionerOn ? 'powerOn' : ''
              }"></ion-icon>
            </button>
          </div>

          ${displayTime(room)}
         
  <div class="schedule-form ${
    room.showSchedule ? 'show-schedule' : 'hide-schedule'
  }">
   <div>      
  <label for="start">Start Time</label>
  <input  id="${room.name}-start-time" class="start-time" name="start" require/>
  </div>

  <div>
  <label for="stop">Stop Time</label>
  <div class="stop-container">
  <input  id="${room.name}-stop-time" class="stop-time" name="stop" required/>
   <button id="submit-schedule">Schedule</button>
  </div>
  </div>
</div>
          <span class="room-status" style="display: ${
            room.airConditionerOn ? '' : 'none'
          }">${room.currTemp > 24 ? 'Warming room to: ' : 'Cooling room to: '}${
      room.currTemp
    }°</span>
    </div>
    `
  })
  if (roomsControlContainer) {
    roomsControlContainer.innerHTML = roomsHTML
  }
}
const displayTime = (room) => {
  return `
      <div class="time-display">
        <span class="time">${room.startTime}</span>
        <div class="bars">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <span class="time">${room.endTime}</span>
      </div>
  `
}

generateRooms()

//turn individual AC's on event listener
const handleACOnOff = (e) => {
  if (e.target.classList.contains('switch')) {
    const room = rooms.find(
      (room) => room.name === e.target.parentNode.parentNode.id
    )

    if (turnAcsON.innerHTML === 'Turn off all ACs') {
      turnAcsON.style.background = ''
      turnAcsON.innerHTML = 'Turn on all ACs'
    }

    room.toggleAircon()
    generateRooms()
  } else if (
    e.target.classList.contains('schedule-btn') &&
    e.target.parentNode.parentNode.classList.contains('room-control')
  ) {
    const room = rooms.find(
      (room) => room.name === e.target.parentNode.parentNode.id
    )
    room.toggleSchedule()
    generateRooms()
  } else if (
    e.target.innerHTML === 'Schedule' &&
    e.target.parentNode.parentNode.parentNode.parentNode.classList.contains(
      'room-control'
    )
  ) {
    const room = rooms.find(
      (room) =>
        room.name === e.target.parentNode.parentNode.parentNode.parentNode.id
    )
    const startTimeValue = document.querySelector(
      `#${room.name}-start-time`
    ).value
    const endTimeValue = document.querySelector(`#${room.name}-stop-time`).value
    room.startTime = startTimeValue
    room.endTime = endTimeValue
    room.toggleSchedule()
    generateRooms()
  }

  if (e.target.classList.contains('room-name')) {
    setSelectedRoom(e.target.parentNode.parentNode.id)
  }
}

//Turn individual AC's on
if (document.querySelector('.rooms-control')) {
  document
    .querySelector('.rooms-control')
    .addEventListener('click', handleACOnOff)
}

// Turn on all AC's hanlder
const turnOnAllAcs = () => {
  if (turnAcsON.innerHTML === 'Turn Off All ACs') {
    rooms.forEach((room) => {
      if (room.airConditionerOn) {
        room.toggleAircon()
      }
      generateRooms()
    })
    turnAcsON.style.background = '#D9D9D9'
    turnAcsON.innerHTML = 'Turn On All ACs'
    return
  }
  rooms.forEach((room) => {
    if (!room.airConditionerOn) {
      room.toggleAircon()
    }
    generateRooms()
  })
  turnAcsON.style.background = '#FFAE33'
  turnAcsON.innerHTML = 'Turn Off All ACs'
}

// event listener to turn on all AC's
if (turnAcsON) {
  turnAcsON.addEventListener('click', turnOnAllAcs)
}

//event listner to add a room to the array
const addRoomButton = document.querySelector('#add-room')
const modal = document.querySelector('#add-room-modal')
const closeButton = document.querySelector('#close-modal')
const roomButton = document.querySelector('#add-room-btn')
const roomNameInput = document.querySelector('#room-name')

// Open the modal when the button is clicked
if (addRoomButton) {
  addRoomButton.addEventListener('click', () => {
    modal.style.display = 'block'
  })
}

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})

// Close the modal when clicking the close button
if (closeButton) {
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

//add room event handler
const addRoomHandler = (event) => {
  event.preventDefault()
  if (roomNameInput && modal && roomSelect) {
    const roomName = roomNameInput.value
    const room = {
      name: roomName,
      currTemp: 25,
      coldPreset: 20,
      warmPreset: 32,
      image: './assets/default-room.avif',
      airConditionerOn: false,
      startTime: '12:00',
      endTime: '23:59',
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
    const updatedRooms = [...rooms, room]
    rooms = updatedRooms
    generateRooms()
    modal.style.display = 'none'
    roomNameInput.value = ''
    roomSelect.innerHTML = ''
    rooms.forEach((room) => {
      const option = document.createElement('option')
      option.value = room.name
      option.textContent = room.name
      roomSelect.appendChild(option)
    })
  }
}

// Add a room when the button is clicked
if (roomButton) {
  roomButton.addEventListener('click', addRoomHandler)
}

module.exports = {
  generateRooms,
  decreaseTempHandler,
  increaseTempHandler
}
