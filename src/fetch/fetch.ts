import type {Fetch} from "./fetch.types";

import axios from 'axios';

export const fetch: Fetch = async (config) => {
  try {
    return await axios.request(config)
  } catch (e) {
    throw e
  }
}