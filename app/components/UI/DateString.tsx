export function DateString({date}: {date: string}) {
  const dateFormatted = new Date(date).toISOString().split("T")[0];
  return (
    <p className="text-base font-medium leading-6 text-teal-500 cursor-default">{dateFormatted}</p>
  );
}
