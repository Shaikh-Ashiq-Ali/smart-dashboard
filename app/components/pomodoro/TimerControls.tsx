"use client";

import { Button, ButtonGroup } from "react-bootstrap";

export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: {
  isRunning: Boolean;
  onStart: () => number;
  onPause: () => number;
  onReset: () => number;
}) {
  return (
    <ButtonGroup>
      {!isRunning ? (
        <Button variant="success" onClick={onStart}>
          Start
        </Button>
      ) : (
        <Button variant="warning" onClick={onPause}>
          Pause
        </Button>
      )}
      <Button variant="secondary" onClick={onReset}>
        Reset
      </Button>
    </ButtonGroup>
  );
}
