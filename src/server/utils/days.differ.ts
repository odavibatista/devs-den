export function daysDifferer(date1: Date, date2: Date): number {
  const time1 = date1.getTime();
  const time2 = date2.getTime();

  const diffInMilliseconds = time1 - time2;

  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.ceil(diffInDays);
}
