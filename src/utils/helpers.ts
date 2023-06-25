const helpers = {
  getAssetUrl: (fileName: string) => {
    const url = new URL(`${fileName}`, import.meta.url).href;
    return url;
  },
};

export default helpers;
