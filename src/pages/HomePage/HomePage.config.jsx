export const handlePostsData = (payload, selectedPlatform) => {
  if (selectedPlatform !== "All Socials") {
    let finalArr = [];

    const arr = payload[selectedPlatform.toLowerCase()];
    arr.forEach((elem) => {
      finalArr.push({ ...elem[0], score: elem[1] });
    });

    return finalArr;
  } else {
    let finalArr = [];
    for (const key in payload) {
      const arr = payload[key];
      arr.forEach((elem) => {
        finalArr.push({ ...elem[0], score: elem[1], platform: key });
      });
    }

    const compare = (a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    };

    finalArr.sort(compare);

    return finalArr;
  }
};
