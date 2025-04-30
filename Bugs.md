## BUG DOCUMENTATION

**Line Number**
206

**Type of Bug**
The value assigned to the options value property of the select element is an object instead of the name property of the object.

**Identified With**
Console.log the selected room in the change event handler of the roomSelect displayed an object instead of the name of the selected room.