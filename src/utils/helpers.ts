const helpers = {
  getAssetUrl: (fileName: string) => {
    const url = new URL(`${fileName}`, import.meta.url).href;
    return url;
  },
  convertObjectToOptions: (obj: Record<string, string>) => {
    return Object.keys(obj).map((key) => ({
      _id: key.toString(),
      name: obj[key] as string,
    }));
  },
  formatUrl: (url: string) => {
    if (typeof url !== 'string') {
      return undefined;
    }
    return url.startsWith('https://') || url.startsWith('http://') ? url : `http://${url}`;
  },
};

export default helpers;
