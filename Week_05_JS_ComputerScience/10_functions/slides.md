![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Functions

---

##Agenda

*	Functions
*	Exercises
*	Mood Swings

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##jQuery Review

---

##Functions

A function is a set of actions that you are telling the machine to do.

```
  function makeSandwich(){
    Open Bread;
    if PeanutButterJelly
      spread peanut butter;
      spread jelly;
    else if BLT
      apply bacon, lettuce, tomato;
    else go hungry;
  }

  makeSandwich();
```

---

##Functions

Chunks of code that help us:

* Stay organized
* Not repeat ourselves
* Control the order that things happen

---

##Function Syntax

```
function helloWorld(){
	console.log('hello!');
}
```

If this were our only javascript, nothing would ever happen!

Defining a function does not cause it to run.

---

##Function Calls

```
function helloWorld(){
	console.log('hello!');
}

console.log('world!');

helloWorld(); //this is how we call a function!
```

Console results:
```
world!
hello!
```

---

##Functions Syntax

![](../../img/unit_2/functions_syntax.png)

---

##Function Calls

![](../../img/unit_2/function_calls.png)

---

##Function Arguments

Data inputs that are "passed" into a function

![](../../img/unit_2/argument_syntax.png)

---

##Function Arguments

![](../../img/unit_2/function_call_argument.png)

---

##Function Arguments

Inside of a function, an argument is like a variable.

```
function hello(message){
	if(message === 'goodbye') {
		message = 'hello';
		console.log('you say goodbye, and I say');
	}
	else {
		console.log(message);
	}

	console.log(message);
}

hello('hello');
hello('goodbye');
```

Console results:
```
hello
hello
you say goodbye, and I say
hello
```
---

##Function Arguments

Define a function that will accept an argument:
```
  function hello (name) {
  		console.log("Hello, it's " + name)
  }
```
Call a function that accepts an argument:
```
  hello('me')

	// outputs: "hello, it's me"

	hello('Mollie')
	hello('Nate')
```

---

##Function Arguments

Functions can accept multiple arguments

Use a comma-separated list to define:
```
  function add (x, y) {
  		return x + y
  }
```
Call a function with multiple arguments:
```
  add(2, 2)

	// returns 4

	add(2, 5)
	add(100, 1)
```
---

##Function returns

Functions can give back data too! `return` is the magic word

```
function winningHand(dealer, player) {
	if(player > dealer && player <= 21){
		return true;
	}
	else {
		return false;
	}
}

var playerWins = winningHand(18, 20);

if(playerWins){
	console.log('You win!!');
}
else {
	console.log('The dealer wins, sorry buddy');
}

```

Console results:
```
You win!!
```

---

##Arguments vs Parameters
Parameters:
Function add defined with two parameters, x and y:
```
  function add (x, y) {
  		return x + y
  }
```

Arguments:
Function add called with the arguments 5 and 2:
```
  add(5, 2)
  // returns 7
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Name Machine

http://codepen.io/nickgrace/pen/BLNGLV

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Homework Grader

http://codepen.io/nickgrace/pen/pEJQvG

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Mood Swings

---

##Mood Swings - Useful Functions

* preventDefault()
* toLowerCase()
* jQuery.click()
* jQuery.attr()
* jQuery.val()
