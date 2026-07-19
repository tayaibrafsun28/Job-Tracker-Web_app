1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:

- getElementById() selects a single element using its id.
- getElementsByClassName() selects all elements with the same class name.
- querySelector() selects the first element that matches a CSS selector (id, class, tag, etc.).
- querySelectorAll() selects all elements that match a CSS selector.


2. How do you create and insert a new element into the DOM?

Ans:

First create the element using `createElement()`, then add content, and finally insert it into the page using `appendChild()`.

3. What is Event Bubbling? And how does it work?

Ans:

Event Bubbling is the process where an event starts from the element that was clicked and then moves upward through its parent elements until it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:

Event Delegation is a technique where you attach an event listener to a parent element instead of adding listeners to each child element. It is useful because it reduces code, improves performance, and also works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:

- preventDefault() stops the browser's default behavior, such as preventing a form from submitting or a link from opening.
- stopPropagation() stops the event from bubbling up to parent elements, so only the current element's event is executed.