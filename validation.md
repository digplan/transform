Validating data with a schema
=========
Transform can be used to validate JSON data, for instance before inserting into a database.
    
Example..
````
var before = [
	{name: 'Chris', age: 42, home:'IL', height:5 },
	{name: 'Barack', age:50, home:'IL', height:6 },
	{name: 'George', age:65, home:'TX', height:5 },
	{name: 'Bill', age:70, home:'NY', height:6 }
]

// validate using a validator, older than 50 is an invalid record
var validator = {
  name: function(s) { return s },
  age: function(i) { return i < 50 }, // over 50 returns false
  home: function(s) { return s },
  height: function(s) { return s } 
}

var error = transformer.validator(before, validator);
if(error) console.log('failed records', error);
else console.log('validation OK');

/*
failed records [ { name: 'Barack', age: false },
  { name: 'George', age: false },
  { name: 'Bill', age: false } ]
*/
````
