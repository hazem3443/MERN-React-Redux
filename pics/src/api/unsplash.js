import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID EdUuN3mI6iGvnXVO6emIJKz59f9w_6M9arXBU95wDqo'
    }
});
