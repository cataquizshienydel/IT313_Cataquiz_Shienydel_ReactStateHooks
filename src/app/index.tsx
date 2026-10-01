import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}) {
  return (
    <View style={styles.tracker}>
      <Text style={styles.title}>Practice Tracker</Text>

      <Text style={styles.solved}>
        Solved: {solved}
      </Text>

      <Button
        title="Solve +1"
        onPress={onSolve}
      />

      <View style={styles.buttonSpace} />

      <Button
        title="Reset"
        onPress={onReset}
      />

      {solved >= 5 && (
        <Text style={styles.greatJob}>
          Great job!
        </Text>
      )}
    </View>
  );
}

function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

function Stopwatch({
  seconds,
  isRunning,
}: {
  seconds: number;
  isRunning: boolean;
}) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;

  return (
    <View style={styles.stopwatch}>
      <Text style={styles.title}>Stopwatch</Text>

      <Text style={styles.timer}>
        {formattedTime}
      </Text>

      {isRunning ? (
        <Text style={styles.running}>
          Running...
        </Text>
      ) : (
        <Text style={styles.paused}>
          Paused
        </Text>
      )}
    </View>
  );
}

function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <Button
          title="Start"
          onPress={handleStart}
        />

        <Button
          title="Stop"
          onPress={handleStop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  tracker: {
    padding: 20,
    marginBottom: 20,
  },

  stopwatch: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  solved: {
    fontSize: 20,
    marginBottom: 15,
  },

  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  running: {
    fontSize: 18,
  },

  paused: {
    fontSize: 18,
  },

  greatJob: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },

  buttonSpace: {
    height: 10,
  },

  controls: {
    gap: 10,
  },
});

export default function HomeScreen() {
  return <LabScreen />;
}