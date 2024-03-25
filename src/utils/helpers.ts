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
  getYouTubeVideoIdFromUrl: (url: string) => {
    // Our regex pattern to look for a youTube ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    // Match the url with the regex
    const match = url.match(regExp);
    // Return the result
    return match && match[2]?.length === 11 ? match[2] : undefined;
  },
  getVideoThumbnail: (url: string) => {
    const youtubeId = helpers.getYouTubeVideoIdFromUrl(url);
    if (youtubeId) {
      return `http://i3.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
    }
    return undefined;
  },
};

export default helpers;
