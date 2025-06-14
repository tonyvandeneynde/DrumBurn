import { ref } from "vue";
import { useTimer } from "./useTimer";

export function useExerciseTimer(
  preRunTime: number,
  uptime: number,
  downtime: number,
  repetitions: number,
  onExerciseComplete: () => void
) {
  const currentPhase = ref<"downtime" | "uptime" | "preRun">("preRun");
  const currentRep = ref(1);

  const onTimerEnded = () => {
    if (currentPhase.value === "uptime") {
      currentPhase.value = "downtime";
      startTimer(downtime);
    } else if (currentPhase.value === "preRun") {
      currentPhase.value = "uptime";
      startTimer(uptime);
    } else if (currentPhase.value === "downtime") {
      if (currentRep.value >= repetitions) {
        onExerciseComplete();
        return;
      }
      currentPhase.value = "uptime";
      currentRep.value += 1;
      startTimer(uptime);
    }
  };

  const { startTimer, stopTimer, timeLabel } = useTimer(onTimerEnded);

  // Start the timer for the initial exercise
  startTimer(preRunTime);

  return {
    currentPhase,
    currentRep,
    timeLabel,
    startTimer,
    stopTimer,
  };
}
