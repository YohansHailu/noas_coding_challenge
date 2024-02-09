import axios from 'axios'

async function fetchImages(query: string): Promise<any[]> {

  const IMAGE_SEARH_API_KEY = process.env.IMAGE_SEARH_API_URL || "";
  const IMAGE_SEARH_API_URL = process.env.IMAGE_SEARH_API_KEY || "";

  const SEARCH_ENGINE_ID = '10aa8b2467a8d4864';
  const NUM_RESULTS = 10;

  const IMAGE_TYPE = 'photo';
  const IMAGE_SIZE = 'xlarge';
  const IMAGE_ASPECT_RATIO = 'widescreen'
  const QUERY = query;

  const url = `${IMAGE_SEARH_API_URL}?key=${IMAGE_SEARH_API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${QUERY}&num=${NUM_RESULTS}&imgType=${IMAGE_TYPE}&imgSize=${IMAGE_SIZE}&imgAspect=${IMAGE_ASPECT_RATIO}`;



  const response = await axios.get(url);
  return response.data.items;

}

async function fetchAudio(query: string): Promise<string> {

  let AUDIO_SEARCH_API_URL = process.env.AUDIO_SEARCH_API_URL || "";
  let AUDIO_SEARCH_API_KEY = process.env.AUDIO_SEARCH_API_KEY || "";
  const response = await axios.get(AUDIO_SEARCH_API_URL, {
    params: {
      q: query,
      type: 'video',
      key: AUDIO_SEARCH_API_KEY,
      videoCategoryId: '10', // Category ID for Music
      maxResults: 1,
      videoDuration: 'short', // Short videos only
    },
  })

  return response.data.items[0].id.videoId

}


export { fetchImages, fetchAudio }
