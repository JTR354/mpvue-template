import request from '@utils/http'
import { baseURL } from '@utils/config'

export default {
  /**
   * 获取签名
   * @returns {Promise.<*>}
   */
  getUploadSign() {
    const url = `${baseURL.upload}/common/file/image/get-upload-sign-for-mini`
    return request.get({url})
  },
  /**
   * 获取文件夹存储桶
   * @param data
   * @returns {Promise.<*>}
   */
  getUploadParam(data) {
    const url = `${baseURL.upload}/common/file/image/get-upload-sign-for-mini`
    return request.get({url, data, loading: false})
  },
  /**
   * 数据入库
   * @param data
   * @returns {Promise.<*>}
   */
  saveFile(data) {
    const url = `${baseURL.upload}/common/file/image/create`
    return request.post({url, data, loading: false})
  }
}
