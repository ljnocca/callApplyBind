(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _record;

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////    Code is in place                                         ////
////    that validates each answer. It will currently say:       ////
////    `Assertion failed` for each question. Once you answer    ////
////    the question correctly that will go away. Use this to    ////
////    check your work                                          ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


// NOTE: You're not meant to edit any code except what's within the
// "Your Answer" arrows. The rest should remain fixed as is...

/////////////////////////////////////////////////////////////////////

// Part 0. ------------------------------------------------------------ //

// Create a simple constructor called "Person" that takes one input, the
// person's name. Add a method to the constructor's prototype called 
// sayMyName that will return the person's name.

// The person should also have an `age` property that always starts off
// as 0. Give the person an `.ageAYear` method that causes the person to 
// age by a year. 

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Person(name) {
    this.name = name;
    this.age = 0;
}

Person.prototype.sayMyName = function () {
    return this.name;
};

Person.prototype.ageAYear = function () {
    return this.age += 1;
};
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

var jim = new Person('james');
console.log(jim);
// the following assertion just checks that you've put sayMyName on the prototype,
// instead of just putting it in the constructor. 
console.assert(Person.prototype.sayMyName === jim.sayMyName);
console.assert(jim.sayMyName() === 'james');
console.assert(jim.age === 0);
jim.ageAYear();
console.assert(jim.age === 1);

// --------------------------------------------------------------- //

// Part 1. ------------------------------------------------------------ //

// Bind the ageAYear function on the Person prototype to the ajax object below. 
// store the bound function in a variable called ajaxAger. 

var ajax = { name: 'francis', age: 35, hometown: 'poughkeepsie' };
var ajaxAger;

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
ajaxAger = Person.prototype.ageAYear.bind(ajax);
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //


console.assert(ajax.age === 35);
ajaxAger();
console.assert(ajax.age === 36);

// ============================================================== //

// Part 2. ------------------------------------------------------------ //

// The following object is array-like, but it doesn't
// share all the methods of an array, such as .indexOf() and 
// .join(). Using the .join() method on the Array prototype and the
// .call() method that's available on every function, join all of 
// the fabrics into a string, separated by a space, and store the 
// result into the variable `yourMansWardrobe.`


var mensShirtFabrics = {
    0: 'flannel',
    1: 'fleece',
    2: 'linen',
    3: 'cotton',
    4: 'chambray',
    length: 5
};

var yourMansWardrobe;

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
mensShirtFabrics.yourMansWardrobe = function () {
    var newArray = [];
    for (var i = 0; i < mensShirtFabrics.length; i++) {
        newArray.push(mensShirtFabrics[i]);
    }

    var newString = newArray.join(' ');
    return newString;
};

mensShirtFabrics.yourMansWardrobe();
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(yourMansWardrobe === "flannel fleece linen cotton chambray");

// ============================================================== //


// Part 3. ------------------------------------------------------------ //

// The following function doesn't do us much good. It makes reference
// to `this`, but as it is, it's not inside of an object, so its 
// `this` keyword has no useful meaning. 

var getEmail = function getEmail() {
    var profileData = this.data;
    var email = profileData.email;
    return email;
};

// So, bind getEmail() to the following object and store the resulting function 
// into the variable boundEmailGetter. Then we can use boundEmailGetter
// to log the email in our result object.

var resultObject = {
    meta: {
        results: 72,
        status: "OK"
    },
    data: {
        name: "johannes schwimmer",
        birthday: "08-12-1975",
        email: "balalaikasAreMyLife@yahoo.com",
        profile_pic_url: "http://johannesschwimmer.com/sweetpics/me.png"
    }
};

var boundEmailGetter;

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
boundEmailGetter = getEmail.bind(resultObject);
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(boundEmailGetter() === "balalaikasAreMyLife@yahoo.com");

// ============================================================== //


// Part 4. ------------------------------------------------------------ //

// This LoggingService constructor has some helpful methods on its prototype.
// Unfortunately, none of the record objects below it are instances of the
// logging service, so they don't have access to its oh-so-helpful methods.

// Use the .call method to invoke .toggleStatus on each of the record objects.
// Don't cheat and just change the status. We will find out, and we will
// never forget.

// Don't touch anything inside here VVV

var LoggingService = function LoggingService() {
    this.totalLogs = 21222747;
};

LoggingService.prototype = {

    getTotalLogs: function getTotalLogs() {
        return this.totalLogs;
    },

    toggleStatus: function toggleStatus(extraParam) {
        console.log("look at my " + extraParam);
        if (!this.active) this.active = true;else this.active = false;
        this.updatedAt = new Date();
    }
};

var record1 = {
    gender: "female",
    username: "blackcat297",
    nat: "DE",
    dob: 745970316,
    active: true,
    updatedAt: "Mon Feb 1 2016 18:12:14 GMT-0600 (CST)"
};
var record2 = {
    gender: "male",
    user: "lazyrabbit954",
    email: "rabbiter2@mail.com",
    nationality: "MX",
    createdAt: 1003300218,
    active: false,
    updatedAt: "Mon Feb1 2016 18:12:15 GMT-0600 (CST)"
};
var record3 = (_record = {
    employer: "guinness",
    dob: 752129825,
    nat: 'IR',
    active: true,
    user: 'orangelion550',
    sex: 'male'
}, _defineProperty(_record, 'active', true), _defineProperty(_record, 'updatedAt', "Mon Feb 1 2016 18:12:14 GMT-0600 (CST)"), _record);

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

LoggingService.prototype.toggleStatus.call(record1);
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(record1.active === false);
console.assert(record1.updatedAt.getMinutes() === new Date().getMinutes());
console.assert(record2.active === true);
console.assert(record2.updatedAt.getMinutes() === new Date().getMinutes());
console.assert(record3.active === false);
console.assert(record3.updatedAt.getMinutes() === new Date().getMinutes());

// ============================================================== //


var app = function app() {
    document.querySelector('.container').innerHTML = '<h1>callapplybind</h1>';
};

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
var app_name = exports.app_name = init();
app();
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFBLEFBQVMsT0FBVCxBQUFnQixNQUFLLEFBQ3BCO1NBQUEsQUFBSyxPQUFMLEFBQVksQUFDVDtTQUFBLEFBQUssTUFBTCxBQUFXLEFBQ2Q7OztBQUVELE9BQUEsQUFBTyxVQUFQLEFBQWlCLFlBQVksWUFBVSxBQUN0QztXQUFPLEtBQVAsQUFBWSxBQUNaO0FBRkQ7O0FBSUEsT0FBQSxBQUFPLFVBQVAsQUFBaUIsV0FBVyxZQUFVLEFBQ3JDO1dBQU8sS0FBQSxBQUFLLE9BQVosQUFBbUIsQUFDbkI7QUFGRDtBQUdBOztBQUVBOztBQUVBLElBQUksTUFBTSxJQUFBLEFBQUksT0FBZCxBQUFVLEFBQVc7QUFDckIsUUFBQSxBQUFRLElBQVIsQUFBWTtBQUNaO0FBQ0E7QUFDQSxRQUFBLEFBQVEsT0FBTyxPQUFBLEFBQU8sVUFBUCxBQUFpQixjQUFjLElBQTlDLEFBQWtEO0FBQ2xELFFBQUEsQUFBUSxPQUFPLElBQUEsQUFBSSxnQkFBbkIsQUFBbUM7QUFDbkMsUUFBQSxBQUFRLE9BQU8sSUFBQSxBQUFJLFFBQW5CLEFBQTJCO0FBQzNCLElBQUEsQUFBSTtBQUNKLFFBQUEsQUFBUSxPQUFPLElBQUEsQUFBSSxRQUFuQixBQUEyQjs7QUFFM0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLE9BQU8sRUFBQyxNQUFELEFBQU8sV0FBVyxLQUFsQixBQUF1QixJQUFJLFVBQXRDLEFBQVcsQUFBcUM7QUFDaEQsSUFBQSxBQUFJOztBQUVKO0FBQ0Es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LDZDQVBOLEFBUVMsMkNBUmI7O0FBWUE7O0FBRUEsZUFBQSxBQUFlLFVBQWYsQUFBeUIsYUFBekIsQUFBc0MsS0FBdEMsQUFBMkM7QUFDM0M7O0FBRUE7O0FBRUEsUUFBQSxBQUFRLE9BQVEsUUFBQSxBQUFRLFdBQXhCLEFBQW1DO0FBQ25DLFFBQUEsQUFBUSxPQUFRLFFBQUEsQUFBUSxVQUFSLEFBQWtCLGlCQUFrQixJQUFELEFBQUMsQUFBSSxPQUF4RCxBQUFtRCxBQUFhO0FBQ2hFLFFBQUEsQUFBUSxPQUFRLFFBQUEsQUFBUSxXQUF4QixBQUFtQztBQUNuQyxRQUFBLEFBQVEsT0FBUSxRQUFBLEFBQVEsVUFBUixBQUFrQixpQkFBa0IsSUFBRCxBQUFDLEFBQUksT0FBeEQsQUFBbUQsQUFBYTtBQUNoRSxRQUFBLEFBQVEsT0FBUSxRQUFBLEFBQVEsV0FBeEIsQUFBbUM7QUFDbkMsUUFBQSxBQUFRLE9BQVEsUUFBQSxBQUFRLFVBQVIsQUFBa0IsaUJBQWtCLElBQUQsQUFBQyxBQUFJLE9BQXhELEFBQW1ELEFBQWE7O0FBRWhFOzs7QUFJQSxJQUFNLE1BQU0sU0FBTixBQUFNLE1BQVcsQUFDckI7YUFBQSxBQUFTLGNBQVQsQUFBdUIsY0FBdkIsQUFBcUMsWUFDdEM7QUFGRDs7QUFJQTtBQUNBO0FBQ08sSUFBTSw4QkFBTixBQUFpQjtBQUN4QjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9cbi8vLy8gICAgQ29kZSBpcyBpbiBwbGFjZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vL1xuLy8vLyAgICB0aGF0IHZhbGlkYXRlcyBlYWNoIGFuc3dlci4gSXQgd2lsbCBjdXJyZW50bHkgc2F5OiAgICAgICAvLy8vXG4vLy8vICAgIGBBc3NlcnRpb24gZmFpbGVkYCBmb3IgZWFjaCBxdWVzdGlvbi4gT25jZSB5b3UgYW5zd2VyICAgIC8vLy9cbi8vLy8gICAgdGhlIHF1ZXN0aW9uIGNvcnJlY3RseSB0aGF0IHdpbGwgZ28gYXdheS4gVXNlIHRoaXMgdG8gICAgLy8vL1xuLy8vLyAgICBjaGVjayB5b3VyIHdvcmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vXG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9cbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyBOT1RFOiBZb3UncmUgbm90IG1lYW50IHRvIGVkaXQgYW55IGNvZGUgZXhjZXB0IHdoYXQncyB3aXRoaW4gdGhlXG4vLyBcIllvdXIgQW5zd2VyXCIgYXJyb3dzLiBUaGUgcmVzdCBzaG91bGQgcmVtYWluIGZpeGVkIGFzIGlzLi4uXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQYXJ0IDAuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBDcmVhdGUgYSBzaW1wbGUgY29uc3RydWN0b3IgY2FsbGVkIFwiUGVyc29uXCIgdGhhdCB0YWtlcyBvbmUgaW5wdXQsIHRoZVxuLy8gcGVyc29uJ3MgbmFtZS4gQWRkIGEgbWV0aG9kIHRvIHRoZSBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBjYWxsZWQgXG4vLyBzYXlNeU5hbWUgdGhhdCB3aWxsIHJldHVybiB0aGUgcGVyc29uJ3MgbmFtZS5cblxuLy8gVGhlIHBlcnNvbiBzaG91bGQgYWxzbyBoYXZlIGFuIGBhZ2VgIHByb3BlcnR5IHRoYXQgYWx3YXlzIHN0YXJ0cyBvZmZcbi8vIGFzIDAuIEdpdmUgdGhlIHBlcnNvbiBhbiBgLmFnZUFZZWFyYCBtZXRob2QgdGhhdCBjYXVzZXMgdGhlIHBlcnNvbiB0byBcbi8vIGFnZSBieSBhIHllYXIuIFxuXG4vLyAtLSDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMgLSBZb3VyIEFuc3dlciAtIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMgLS0gLy9cbmZ1bmN0aW9uIFBlcnNvbihuYW1lKXtcblx0dGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFnZSA9IDA7XG59XG5cblBlcnNvbi5wcm90b3R5cGUuc2F5TXlOYW1lID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIHRoaXMubmFtZVxufVxuXG5QZXJzb24ucHJvdG90eXBlLmFnZUFZZWFyID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIHRoaXMuYWdlICs9IDFcbn1cbi8vIC0tIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEgLS0gLy9cblxuLy8gPT09PSBWYWxpZGF0aW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbnZhciBqaW0gPSBuZXcgUGVyc29uKCdqYW1lcycpXG5jb25zb2xlLmxvZyhqaW0pXG4vLyB0aGUgZm9sbG93aW5nIGFzc2VydGlvbiBqdXN0IGNoZWNrcyB0aGF0IHlvdSd2ZSBwdXQgc2F5TXlOYW1lIG9uIHRoZSBwcm90b3R5cGUsXG4vLyBpbnN0ZWFkIG9mIGp1c3QgcHV0dGluZyBpdCBpbiB0aGUgY29uc3RydWN0b3IuIFxuY29uc29sZS5hc3NlcnQoUGVyc29uLnByb3RvdHlwZS5zYXlNeU5hbWUgPT09IGppbS5zYXlNeU5hbWUpXG5jb25zb2xlLmFzc2VydChqaW0uc2F5TXlOYW1lKCkgPT09ICdqYW1lcycpXG5jb25zb2xlLmFzc2VydChqaW0uYWdlID09PSAwKVxuamltLmFnZUFZZWFyKClcbmNvbnNvbGUuYXNzZXJ0KGppbS5hZ2UgPT09IDEpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBQYXJ0IDEuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBCaW5kIHRoZSBhZ2VBWWVhciBmdW5jdGlvbiBvbiB0aGUgUGVyc29uIHByb3RvdHlwZSB0byB0aGUgYWpheCBvYmplY3QgYmVsb3cuIFxuLy8gc3RvcmUgdGhlIGJvdW5kIGZ1bmN0aW9uIGluIGEgdmFyaWFibGUgY2FsbGVkIGFqYXhBZ2VyLiBcblxudmFyIGFqYXggPSB7bmFtZTogJ2ZyYW5jaXMnLCBhZ2U6IDM1LCBob21ldG93bjogJ3BvdWdoa2VlcHNpZSd9XG52YXIgYWpheEFnZXJcblxuLy8gLS0g4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIC0gWW91ciBBbnN3ZXIgLSDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIC0tIC8vXG5hamF4QWdlciA9IFBlcnNvbi5wcm90b3R5cGUuYWdlQVllYXIuYmluZChhamF4KVxuLy8gLS0g4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSAtLSAvL1xuXG4vLyA9PT09IFZhbGlkYXRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuXG5jb25zb2xlLmFzc2VydChhamF4LmFnZSA9PT0gMzUpXG5hamF4QWdlcigpXG5jb25zb2xlLmFzc2VydChhamF4LmFnZSA9PT0gMzYpXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbi8vIFBhcnQgMi4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIFRoZSBmb2xsb3dpbmcgb2JqZWN0IGlzIGFycmF5LWxpa2UsIGJ1dCBpdCBkb2Vzbid0XG4vLyBzaGFyZSBhbGwgdGhlIG1ldGhvZHMgb2YgYW4gYXJyYXksIHN1Y2ggYXMgLmluZGV4T2YoKSBhbmQgXG4vLyAuam9pbigpLiBVc2luZyB0aGUgLmpvaW4oKSBtZXRob2Qgb24gdGhlIEFycmF5IHByb3RvdHlwZSBhbmQgdGhlXG4vLyAuY2FsbCgpIG1ldGhvZCB0aGF0J3MgYXZhaWxhYmxlIG9uIGV2ZXJ5IGZ1bmN0aW9uLCBqb2luIGFsbCBvZiBcbi8vIHRoZSBmYWJyaWNzIGludG8gYSBzdHJpbmcsIHNlcGFyYXRlZCBieSBhIHNwYWNlLCBhbmQgc3RvcmUgdGhlIFxuLy8gcmVzdWx0IGludG8gdGhlIHZhcmlhYmxlIGB5b3VyTWFuc1dhcmRyb2JlLmBcblxuXG52YXIgbWVuc1NoaXJ0RmFicmljcyA9IHtcbiAgICAwOiAnZmxhbm5lbCcsIFxuICAgIDE6ICdmbGVlY2UnLCBcbiAgICAyOiAnbGluZW4nLCBcbiAgICAzOiAnY290dG9uJywgXG4gICAgNDogJ2NoYW1icmF5JyxcbiAgICBsZW5ndGg6IDVcbn1cblxudmFyIHlvdXJNYW5zV2FyZHJvYmVcblxuLy8gLS0g4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIC0gWW91ciBBbnN3ZXIgLSDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIC0tIC8vXG5tZW5zU2hpcnRGYWJyaWNzLnlvdXJNYW5zV2FyZHJvYmUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBuZXdBcnJheSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGk8bWVuc1NoaXJ0RmFicmljcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIG5ld0FycmF5LnB1c2gobWVuc1NoaXJ0RmFicmljc1tpXSlcbiAgICB9XG4gICAgXG4gICAgdmFyIG5ld1N0cmluZyA9IG5ld0FycmF5LmpvaW4oJyAnKVxuICAgIHJldHVybihuZXdTdHJpbmcpXG59XG5cbm1lbnNTaGlydEZhYnJpY3MueW91ck1hbnNXYXJkcm9iZSgpXG4vLyAtLSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIC0tIC8vXG5cbi8vID09PT0gVmFsaWRhdGluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG5jb25zb2xlLmFzc2VydCh5b3VyTWFuc1dhcmRyb2JlID09PSBcImZsYW5uZWwgZmxlZWNlIGxpbmVuIGNvdHRvbiBjaGFtYnJheVwiKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG5cbi8vIFBhcnQgMy4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gZG9lc24ndCBkbyB1cyBtdWNoIGdvb2QuIEl0IG1ha2VzIHJlZmVyZW5jZVxuLy8gdG8gYHRoaXNgLCBidXQgYXMgaXQgaXMsIGl0J3Mgbm90IGluc2lkZSBvZiBhbiBvYmplY3QsIHNvIGl0cyBcbi8vIGB0aGlzYCBrZXl3b3JkIGhhcyBubyB1c2VmdWwgbWVhbmluZy4gXG5cbnZhciBnZXRFbWFpbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9maWxlRGF0YSA9IHRoaXMuZGF0YVxuICAgIHZhciBlbWFpbCA9IHByb2ZpbGVEYXRhLmVtYWlsXG4gICAgcmV0dXJuIGVtYWlsXG59XG5cbi8vIFNvLCBiaW5kIGdldEVtYWlsKCkgdG8gdGhlIGZvbGxvd2luZyBvYmplY3QgYW5kIHN0b3JlIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24gXG4vLyBpbnRvIHRoZSB2YXJpYWJsZSBib3VuZEVtYWlsR2V0dGVyLiBUaGVuIHdlIGNhbiB1c2UgYm91bmRFbWFpbEdldHRlclxuLy8gdG8gbG9nIHRoZSBlbWFpbCBpbiBvdXIgcmVzdWx0IG9iamVjdC5cblxudmFyIHJlc3VsdE9iamVjdCA9IHtcbiAgICBtZXRhOiB7XG4gICAgICAgIHJlc3VsdHM6NzIsXG4gICAgICAgIHN0YXR1czpcIk9LXCJcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogXCJqb2hhbm5lcyBzY2h3aW1tZXJcIixcbiAgICAgICAgYmlydGhkYXk6IFwiMDgtMTItMTk3NVwiLFxuICAgICAgICBlbWFpbDogXCJiYWxhbGFpa2FzQXJlTXlMaWZlQHlhaG9vLmNvbVwiLFxuICAgICAgICBwcm9maWxlX3BpY191cmw6IFwiaHR0cDovL2pvaGFubmVzc2Nod2ltbWVyLmNvbS9zd2VldHBpY3MvbWUucG5nXCJcbiAgICB9XG59XG5cbnZhciBib3VuZEVtYWlsR2V0dGVyXG5cbi8vIC0tIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyAtIFlvdXIgQW5zd2VyIC0g4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyAtLSAvL1xuYm91bmRFbWFpbEdldHRlciA9IGdldEVtYWlsLmJpbmQocmVzdWx0T2JqZWN0KVxuLy8gLS0g4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSAtLSAvL1xuXG4vLyA9PT09IFZhbGlkYXRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuY29uc29sZS5hc3NlcnQoYm91bmRFbWFpbEdldHRlcigpID09PSBcImJhbGFsYWlrYXNBcmVNeUxpZmVAeWFob28uY29tXCIpXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cblxuLy8gUGFydCA0LiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gVGhpcyBMb2dnaW5nU2VydmljZSBjb25zdHJ1Y3RvciBoYXMgc29tZSBoZWxwZnVsIG1ldGhvZHMgb24gaXRzIHByb3RvdHlwZS5cbi8vIFVuZm9ydHVuYXRlbHksIG5vbmUgb2YgdGhlIHJlY29yZCBvYmplY3RzIGJlbG93IGl0IGFyZSBpbnN0YW5jZXMgb2YgdGhlXG4vLyBsb2dnaW5nIHNlcnZpY2UsIHNvIHRoZXkgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gaXRzIG9oLXNvLWhlbHBmdWwgbWV0aG9kcy5cblxuLy8gVXNlIHRoZSAuY2FsbCBtZXRob2QgdG8gaW52b2tlIC50b2dnbGVTdGF0dXMgb24gZWFjaCBvZiB0aGUgcmVjb3JkIG9iamVjdHMuXG4vLyBEb24ndCBjaGVhdCBhbmQganVzdCBjaGFuZ2UgdGhlIHN0YXR1cy4gV2Ugd2lsbCBmaW5kIG91dCwgYW5kIHdlIHdpbGxcbi8vIG5ldmVyIGZvcmdldC5cblxuLy8gRG9uJ3QgdG91Y2ggYW55dGhpbmcgaW5zaWRlIGhlcmUgVlZWXG5cbnZhciBMb2dnaW5nU2VydmljZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMudG90YWxMb2dzID0gMjEyMjI3NDdcbn1cblxuTG9nZ2luZ1NlcnZpY2UucHJvdG90eXBlID0ge1xuXG4gIGdldFRvdGFsTG9nczogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy50b3RhbExvZ3NcbiAgfSxcblxuICB0b2dnbGVTdGF0dXM6IGZ1bmN0aW9uKGV4dHJhUGFyYW0pe1xuICAgIGNvbnNvbGUubG9nKFwibG9vayBhdCBteSBcIiArIGV4dHJhUGFyYW0pXG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkgdGhpcy5hY3RpdmUgPSB0cnVlXG4gICAgZWxzZSB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy51cGRhdGVkQXQgPSBuZXcgRGF0ZSgpXG4gIH1cbn1cblxudmFyIHJlY29yZDEgPSB7XG4gICBnZW5kZXI6IFwiZmVtYWxlXCIsXG4gICB1c2VybmFtZTogXCJibGFja2NhdDI5N1wiLFxuICAgbmF0OiBcIkRFXCIsXG4gICBkb2I6IDc0NTk3MDMxNixcbiAgIGFjdGl2ZTogdHJ1ZSxcbiAgIHVwZGF0ZWRBdDogXCJNb24gRmViIDEgMjAxNiAxODoxMjoxNCBHTVQtMDYwMCAoQ1NUKVwiXG59XG52YXIgcmVjb3JkMiA9IHtcbiAgIGdlbmRlcjogXCJtYWxlXCIsXG4gICB1c2VyOiBcImxhenlyYWJiaXQ5NTRcIixcbiAgIGVtYWlsOiBcInJhYmJpdGVyMkBtYWlsLmNvbVwiLFxuICAgbmF0aW9uYWxpdHk6IFwiTVhcIixcbiAgIGNyZWF0ZWRBdDogMTAwMzMwMDIxOCxcbiAgIGFjdGl2ZTogZmFsc2UsXG4gICB1cGRhdGVkQXQ6IFwiTW9uIEZlYjEgMjAxNiAxODoxMjoxNSBHTVQtMDYwMCAoQ1NUKVwiXG59XG52YXIgcmVjb3JkMyA9IHtcbiAgZW1wbG95ZXI6IFwiZ3Vpbm5lc3NcIixcbiAgZG9iOiA3NTIxMjk4MjUsXG4gIG5hdDogJ0lSJyxcbiAgYWN0aXZlOiB0cnVlLFxuICB1c2VyOiAnb3JhbmdlbGlvbjU1MCcsXG4gIHNleDogJ21hbGUnLFxuICBhY3RpdmU6IHRydWUsXG4gIHVwZGF0ZWRBdDogXCJNb24gRmViIDEgMjAxNiAxODoxMjoxNCBHTVQtMDYwMCAoQ1NUKVwiXG59XG5cblxuLy8gLS0g4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIC0gWW91ciBBbnN3ZXIgLSDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIOKGkyDihpMg4oaTIC0tIC8vXG5cbkxvZ2dpbmdTZXJ2aWNlLnByb3RvdHlwZS50b2dnbGVTdGF0dXMuY2FsbChyZWNvcmQxLCkgIFxuLy8gLS0g4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSDihpEg4oaRIOKGkSAtLSAvL1xuXG4vLyA9PT09IFZhbGlkYXRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuY29uc29sZS5hc3NlcnQoIHJlY29yZDEuYWN0aXZlID09PSBmYWxzZSApXG5jb25zb2xlLmFzc2VydCggcmVjb3JkMS51cGRhdGVkQXQuZ2V0TWludXRlcygpID09PSAobmV3IERhdGUoKSkuZ2V0TWludXRlcygpIClcbmNvbnNvbGUuYXNzZXJ0KCByZWNvcmQyLmFjdGl2ZSA9PT0gdHJ1ZSApXG5jb25zb2xlLmFzc2VydCggcmVjb3JkMi51cGRhdGVkQXQuZ2V0TWludXRlcygpID09PSAobmV3IERhdGUoKSkuZ2V0TWludXRlcygpIClcbmNvbnNvbGUuYXNzZXJ0KCByZWNvcmQzLmFjdGl2ZSA9PT0gZmFsc2UgKVxuY29uc29sZS5hc3NlcnQoIHJlY29yZDMudXBkYXRlZEF0LmdldE1pbnV0ZXMoKSA9PT0gKG5ldyBEYXRlKCkpLmdldE1pbnV0ZXMoKSApXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cblxuXG5jb25zdCBhcHAgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGA8aDE+Y2FsbGFwcGx5YmluZDwvaDE+YFxufVxuXG4vLyB4Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li5cbi8vIE5FQ0VTU0FSWSBGT1IgVVNFUiBGVU5DVElPTkFMSVRZLiBETyBOT1QgQ0hBTkdFLiBcbmV4cG9ydCBjb25zdCBhcHBfbmFtZSA9IGluaXQoKVxuYXBwKClcbi8vIHguLnguLnguLnguLnguLnguLnguLnguLnguLnguLnguLnguLnguLnguLnguLnguLiJdfQ==
