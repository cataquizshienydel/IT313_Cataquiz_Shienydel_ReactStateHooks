# IT313 Laboratory 5 - React State & Hooks

## Project Title

Lab Timer & Practice Tracker

## Problem

The application is designed to help students during laboratory sessions
track how many practice problems they have solved and how long they have
been working.

## Technologies Used

- React Native
- Expo
- TypeScript
- React Hooks

## React Concepts Used

### useState

useState is used to store the solved problem count and the running state
of the stopwatch.

### useEffect

useEffect is used to create the stopwatch interval while the timer is
running.

### Cleanup Function

clearInterval is used to stop the interval when the stopwatch stops or
when the component unmounts.

### Conditional Rendering

Conditional rendering displays "Great job!" when five or more problems
are solved and displays "Running..." or "Paused" depending on the
stopwatch state.

### Lifting State Up

LabScreen manages the shared state and passes the required values and
functions to PracticeTracker and Stopwatch.

### Custom Hook

The useStopwatch custom hook contains the stopwatch state and timer
logic.

## How to Run

1. Install Node.js.
2. Install Expo Go on a mobile device.
3. Open the project folder in VS Code.
4. Run:

   npx expo start

5. Scan the QR code using Expo Go.

## Author

Braygem Ilagan
BSIT