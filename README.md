# Unhandled setInterval in useEffect causing memory leak

This repository demonstrates a common error in React components:  forgetting to clear an interval started within a `useEffect` hook. This leads to a memory leak because the interval continues to run even after the component unmounts.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected implementation.

## Bug
The `setInterval` function within the `useEffect` hook is not being cleared when the component unmounts. This results in an interval continuing infinitely, consuming resources even after the component is no longer in use.

## Solution
The solution involves storing the return value of `setInterval` in a variable and using the `clearInterval` function in the cleanup function of the `useEffect` hook to stop the interval before the component unmounts.