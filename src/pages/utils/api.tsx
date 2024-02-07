import axios from 'axios'

async function fetchImages(query: string): Promise<any[]> {

  const API_KEY = 'AIzaSyCtcv8617WkLUMq3ng0Krhd10_PhsxNgYY';
  const SEARCH_ENGINE_ID = '10aa8b2467a8d4864';
  const QUERY = query;
  const NUM_RESULTS = 10;

  const IMAGE_TYPE = 'photo';
  const IMAGE_SIZE = 'xlarge';
  const IMAGE_ASPECT_RATIO = 'widescreen'

  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${QUERY}&num=${NUM_RESULTS}&imgType=${IMAGE_TYPE}&imgSize=${IMAGE_SIZE}&imgAspect=${IMAGE_ASPECT_RATIO}`;



  const response = await axios.get(url);
  return response.data.items;

}

async function fetchAudio(query: string): Promise<string> {

  let api_url = 'https://www.googleapis.com/youtube/v3/search'
  let api_key = 'AIzaSyAhRLfHo7TzwPJrXDc2Tz2aM_j9ucLhqPw'
  const response = await axios.get(api_url, {
    params: {
      q: query,
      type: 'video',
      key: api_key,
      videoCategoryId: '10', // Category ID for Music
      maxResults: 1,
      videoDuration: 'short', // Short videos only
    },
  })

  return response.data.items[0].id.videoId

}


export { fetchImages, fetchAudio }
