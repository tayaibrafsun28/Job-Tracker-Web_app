### 1. What is the difference between getElementById(), getElementsByClassName(), and querySelector() / querySelectorAll()?

- **getElementById()**
  - Selects a single element using its unique `id`.
  - Returns one element or `null`.

  ```javascript
  document.getElementById("title");
  ```

- **getElementsByClassName()**
  - Selects all elements with a given class name.
  - Returns a live HTMLCollection.

  ```javascript
  document.getElementsByClassName("card");
  ```

- **querySelector()**
  - Selects the first element that matches a CSS selector.

  ```javascript
  document.querySelector(".card");
  ```

- **querySelectorAll()**
  - Selects all elements matching a CSS selector.
  - Returns a static NodeList.

  ```javascript
  document.querySelectorAll(".card");
  ```