const getAssetsURL = (assetsPath: string) => {
  // 相对路径, 当前路径的url
  return new URL(`../assets${assetsPath}`, import.meta.url).href;
};
export { getAssetsURL };
