import type {AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios';

import axios from 'axios';
import {ENV} from "../constants/global.constants";

const onRequestStart = (config: AxiosRequestConfig) => {
  return {
    ...config,
    url: `${ENV.API_URL}${config.url}`
  };
}

const onRequestSuccess = (response: AxiosResponse) => {
  return response.data
}

const onResponseError = (error: AxiosError) => {
  return Promise.reject(error)
}

export const initializeInterceptors = () => {
  axios.interceptors.request.use(onRequestStart)
  axios.interceptors.response.use(onRequestSuccess, onResponseError);
};
