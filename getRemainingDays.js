const remainingDays = () => {
  try {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    // today's date
    const currentDate = new Date().toISOString().slice(0, 10); // 2020-28-06
    const splittedCurrentDate = currentDate.split("-"); // becomes an array [2020, 28, 06]
    // converting from array to this format "2020,28,06"
    const currentDatee = new Date(
      `${splittedCurrentDate[0]}, ${splittedCurrentDate[1]}, ${splittedCurrentDate[2]}`
    );

    // launch Date
    const launchDate = new Date("2020-07-26").toISOString().slice(0, 10);
    const splittedLaunchDate = launchDate.split("-");
    const launchDatee = new Date(
      `${splittedLaunchDate[0]}, ${splittedLaunchDate[1]}, ${splittedLaunchDate[2]}`
    );
    // console.log(currentDatee, launchDatee);

    const diffDays = Math.round(
      Math.abs((currentDatee - launchDatee) / oneDay)
    );
    console.log(diffDays);
  } catch {
    console.log("Error");
  }
};
