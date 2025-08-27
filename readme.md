1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementById → selects 1 element by its id.
getElementsByClassName → selects all elements with a class (live HTMLCollection).
querySelector → selects 1 element using a CSS selector.
querySelectorAll → selects all elements using a CSS selector (static NodeList).



2.How do you create and insert a new element into the DOM?
ans: 
Create the element: let element = document.createElement("tagName");
Add content or attributes: element.textContent = "Text";
Insert into DOM: parent.appendChild(element);
and its the answer to create and insert a new element into the dom




3.What is Event Bubbling and how does it work?
ans:
Event Bubbling: When an event occurs on an element, it first runs on that element and then bubbles up to its parent elements all the way to html.
And Do Stop bubbling is: event.stopPropagation()




4.What is Event Delegation in JavaScript? Why is it useful?
ans:
Event Delegation: It’s a technique where you attach a single event listener to a parent element to handle events on its child elements.and
Why it useful because Saves memory and works for dynamically added elements.




5.What is the difference between preventDefault() and stopPropagation() methods?
ans:
preventDefault() → stops the element’s default action 
stopPropagation() → stops the event from bubbling or capturing to parent elements.