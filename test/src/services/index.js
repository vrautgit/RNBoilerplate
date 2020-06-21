import axios from 'axios';
import Config from 'react-native-config';
import { helpers, constants } from '../config';

const { statusCodes } = constants;

const { BASE_URL } = Config;

const apiRequest = (type, data, url, header = {}) => new Promise(async (resolve, reject) => {
  try {
    const res = await axios({
      method: type,
      header: helpers.buildHeader(header),
      url: `${BASE_URL}${url}`,
      data
    });
    const resData = res.data;
    if (res.status === statusCodes.success) {
      resolve(resData.data);
    } else {
      reject();
    }
  } catch (err) {
    reject();
  }
});

export default apiRequest;
