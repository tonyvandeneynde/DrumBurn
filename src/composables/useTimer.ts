import { ref, computed } from "vue";

export const useTimer = (onTimerEnded: () => void) => {
  const timeLeft = ref(0);
  const isTimerRunning = ref(false);
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const startTimer = (initialTimeInSeconds: number) => {
    if (intervalId) return;

    timeLeft.value = initialTimeInSeconds;
    isTimerRunning.value = true;

    intervalId = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value -= 1;
      } else {
        stopTimer();
        onTimerEnded();
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalId) {
      isTimerRunning.value = false;
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs > 0 ? `${hrs}:` : ""}${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const timeLabel = computed(() => formatTime(timeLeft.value));

  return {
    startTimer,
    stopTimer,
    timeLeft,
    timeLabel,
    isTimerRunning,
  };
};
