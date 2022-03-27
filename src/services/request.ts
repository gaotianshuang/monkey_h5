import axios, {
  AxiosInstance,
  AxiosRequestConfig
} from 'axios'

class Request {
  public instance: AxiosInstance

  constructor (config: AxiosRequestConfig) {
    this.instance = this.getInstance(config)
  }

  private getInstance (config: AxiosRequestConfig) {
    return axios.create({
      ...config
    })
  }
}

const request = new Request({
  timeout: 10000
})

export default request.instance
