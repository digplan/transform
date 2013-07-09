Transform
=========
Reference code for the transform protocol.    

The transform protocol provides a very simple expression of the instructions of transforming a data record from one format to another.    
Such transformations are common in many areas of programming, but especially in business applications, where billions of dollars are spent
integrating various applications.    

A Transform document has two uses, as a representation of how the data fields of a record are to be modified between two systems,    
and as the actual input to a simple program that does the transformation.  A working program (reference code for the protocol) is provided here.    

The only comparitive technology that comes to mind is XSLT.  Anyone who has felt working with XML and XSLT is frustrating and unnecessarily complex may appreciate this approach.    
####The Transform Specification
The Transform document (or object) describes the rules in transforming one JSON document to another.    
A Transform object is valid (JSON)[http://www.json.org/], and a single Javascript object.    
The keys in the object correspond to the keys in the source document.    
The values for each key must be one of the following:    
A Javascript function, the result of which is used as the value in the destination document.    
A Javascript array with two items, the first is the new key in the destination document, the second is a function that returns the value in the destination document.    
A Javascript array with one item, a string which defines the key in the destination document.  The value in the destination document is unchanged.     
    
Any key in the source document that is not in the transform object, is not carried over to the destination document.
    
An example..
````
var before = [
	{name: 'Chris', age: 42, home:'IL', height:5 },
	{name: 'Barack', age:50, home:'IL', height:6 },
	{name: 'George', age:65, home:'TX', height:5 },
	{name: 'Bill', age:70, home:'NY', height:6 }
]

// the Transform document
var mapping = {
	name: function(s) { return s + '!'},
	age: function(i) { return i > 50 ? 'old' : 'not old' },
	home: ['place', function(s){ return s }],
	height: ['IQ']
}

var after = transformer.transform(before, mapping);

==>

[
    {
        "name": "Chris!",
        "age": "not old",
        "place": "IL",
        "IQ": 5
    },
    {
        "name": "Barack!",
        "age": "not old",
        "place": "IL",
        "IQ": 6
    },
    {
        "name": "George!",
        "age": "old",
        "place": "TX",
        "IQ": 5
    },
    {
        "name": "Bill!",
        "age": "old",
        "place": "NY",
        "IQ": 6
    }
]
````
