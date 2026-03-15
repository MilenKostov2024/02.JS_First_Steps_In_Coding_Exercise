function calculateReadingHours(pages, pagesPerHour, days) {
  const totalHours = pages / pagesPerHour;
  const hoursPerDay = totalHours / days;
  return hoursPerDay.toFixed(1);
}

calculateReadingHours()
