## BUG DOCUMENTATION

**Line Number**
206

**Type of Bug**
The value assigned to the options value property of the select element was an object instead of the name property of the object.

**Identified With**
Console.log the selected room in the change event handler of the roomSelect displayed an object instead of the name of the selected room.

**Line Number**
245 and 248, 268 and 271

**Type of Bug**
Since a regular function with this keyword is assigned to the variable defined with let, the regular function losses the this keyword because it now become a function expression, where this.currTemp++ wouldnt refer to any object.

**Identified With**
Console.log an increase and decrease in the room object currentTemp after the increament and decreament button is clicked, shows no change in values.


**Line Number**
242 and 261

**Type of Bug**
Warm and cold buttons did not set the room temperature to their preset values when clicked, ie. no event handlers were attached upon being clicked.

**Identified With**
Console.log the selected room in the change event handler of the roomSelect displayed an object instead of the name of the selected room.

**Line Number**
399

**Type of Bug**
The condition to determine whether temperature is warm or cold needed to be greater than 24 and not 25
