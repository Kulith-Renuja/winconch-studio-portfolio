import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (credentials: { username: string; password: string }) =>
    api.post('/auth/login', credentials),
  
  register: (data: { username: string; email: string; password: string }) =>
    api.post('/auth/register', data),
};

// Videos API
export const videosAPI = {
  getAll: (params?: { category?: string; featured?: boolean }) =>
    api.get('/videos', { params }),
  
  getById: (id: string) =>
    api.get(`/videos/${id}`),
  
  create: (videoData: {
    title: string;
    description: string;
    thumbnail: string;
    videoId: string;
    duration: string;
    views?: string;
    category: string;
    featured?: boolean;
  }) => api.post('/videos', videoData),
  
  update: (id: string, videoData: any) =>
    api.put(`/videos/${id}`, videoData),
  
  delete: (id: string) =>
    api.delete(`/videos/${id}`),
};

export default api;