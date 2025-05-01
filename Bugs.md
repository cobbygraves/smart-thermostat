## BUGS DOCUMENTATION-(All line numbers are with reference to the initial script of the main.js file)

**Warm and Cold Overlay Mismatch Bug**
The value for the warmOverlay and coldOverlay constant variables doesn't represent what they are intended. In other words their values have been swapped, and therefore result in wrong overlay for the warm and cold temperature.(line 145 & 151)

**Initial Overlay Duplicate Code**
The setInitialOverlay functionality has two seperate code doing the same thing(line 154 & 158), ie. setting the initial overlay of the room, when selected.

**Invalid Room Options Value Bug**
The option value passed to the rooms inside the forEach loop(line 206) is supposed to be the name of the room and not the room object itself.

**Increase Temperature Button Bug**
Assigning the room.increaseTemp to the increaseRoomTemp constant variable(line 243) has no effect on the call to increaseRoomTemp inside the if block(line 246) becuase of the this keyword in the definition of the room.increaseTemp function of the room object.

**Decrease Temperature Button Bug**
Assigning the room.decreaseTemp to the decreaseRoomTemp constant variable(line 267) has no effect on the call to decreaseRoomTemp inside the if block(line 267) becuase of the this keyword in the definition of the room.decreaseTemp function of the room object.

**Warm & Coold Button Event handlers Bug**
The warm and cold buttons in line(283 & 284) do not have event handlers attached to their click event, therefore doesn't respond to any click event.

**Incorrect If Condition When Saving Preset Bug**
The if condition that validate the range of values valid for cold temperature ie(line 308) exceeds the valid values, ie. instead of showing the error when the cold temperature exceeds 24, it rather shows the error when 24 is inclusive.
