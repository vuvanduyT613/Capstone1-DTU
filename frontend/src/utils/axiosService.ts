import axios from 'axios';
export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  console.log(response);
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 *
 * @return {object}           The response data
 */
export async function GET(
  url: string,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await axios.get(url);
  const response = checkStatus(fetchResponse.data);
  return parseJSON(response);
}

export async function POST(
  url: string,
  data?: Object,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await axios.post(url, data);
  //@ts-ignore
  const response = await checkStatus(fetchResponse);
  return response;
}
