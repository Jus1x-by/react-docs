export const mergeClass = (
  ...classes: (string | string[] | undefined | null)[]
): string => {
  const validClassNames = classes.reduce((acc: string[], className) => {
    if (className) {
      if (typeof className === "string") {
        acc.push(className);
      } else if (Array.isArray(className)) {
        acc.push(mergeClass(...className));
      }
    }

    return acc;
  }, []);

  return validClassNames.join(" ");
};

export const formatDate = (dateString: string | null): string | null => {
  if (!dateString) {
    return null;
  }
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
};
