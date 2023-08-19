export const createImgArray = (imgCount: number, ) => {
  const imagePaths = [];

  for (let i = 1; i <= imgCount; i++) {
    const imagePath = `/images/carousel${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return imagePaths;
};
