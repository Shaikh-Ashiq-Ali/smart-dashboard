// Time ko MM:SS format me convert karke dikhata hai
export default function TimerDisplay({ seconds }: { seconds: number }) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return <h1 className="my-3 display-4">{formatted}</h1>;
}
