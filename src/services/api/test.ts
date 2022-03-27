import request from '../request'
const baseUrl = process.env.VUE_APP_API_URL

export const testAxios = (): Promise<unknown> => {
  return request.get(`${baseUrl}/json`)
}
