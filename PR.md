✏️ Frontend Task: Dynamic Input List with Optimized Rendering
Objective:

Build a small React application that allows users to manage a dynamic list of input fields. The list starts with 20 inputs and can be modified by the user.

🧩 Components:
You should implement two components:

1. Parent Component
Renders a list of 20 input fields using the Child component.
Each input should have a fixed label like Input 1, Input 2, ..., Input 20.
Provide a "Print All" button that logs the values of all current inputs to the console.
Provide an "Add Input" button to append a new empty input to the list.
Each input should have a "Remove" button to delete itself from the list.
2. Child Component
Renders a single input field with a label and a remove button.

The component should only re-render when its own value changes or it is removed/re-added.

✅ Additional Requirement:

When an input is removed (e.g., Input 2), that input should go away, but the labels of the remaining inputs must not shift.

For example, if Input 2 is removed, the list should show:
Input 1, (gap), Input 3, Input 4, etc. — skipping Input 2.

When printing values in console, only the remaining input values should be printed (those that are still visible and has values).

✅ Requirements Summary:

20 inputs should render on load.
Typing in one input should not cause other inputs to re-render.
Labels must stay fixed to their original index even after deletions.


Note: You can use Google for referring syntax etc