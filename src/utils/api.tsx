import axios from 'axios'

async function fetchImages(query: string): Promise<any[]> {

  let IMAGE_SEARH_API_URL = 'https://www.googleapis.com/customsearch/v1';
  let IMAGE_SEARH_API_KEY = 'AIzaSyCtcv8617WkLUMq3ng0Krhd10_PhsxNgYY';



  const SEARCH_ENGINE_ID = '10aa8b2467a8d4864';
  const NUM_RESULTS = 10;

  const IMAGE_TYPE = 'photo';
  const IMAGE_SIZE = 'xlarge';
  const IMAGE_ASPECT_RATIO = 'widescreen'
  const QUERY = query;

  console.log(IMAGE_SEARH_API_URL);

  const url = `${IMAGE_SEARH_API_URL}?key=${IMAGE_SEARH_API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${QUERY}&num=${NUM_RESULTS}&imgType=${IMAGE_TYPE}&imgSize=${IMAGE_SIZE}&imgAspect=${IMAGE_ASPECT_RATIO}`;



  const response = await axios.get(url);
  return response.data.items;

}

async function fetchAudio(query: string): Promise<string> {

  let AUDIO_SEARCH_API_URL = 'https://www.googleapis.com/youtube/v3/search'
  let AUDIO_SEARCH_API_KEY = 'AIzaSyAhRLfHo7TzwPJrXDc2Tz2aM_j9ucLhqPw'
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
