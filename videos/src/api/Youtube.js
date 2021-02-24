import axios from 'axios';

const KEY='AIzaSyC-2n3BDgqCOcfEkDTxl5YbpWfJiHmekoA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
