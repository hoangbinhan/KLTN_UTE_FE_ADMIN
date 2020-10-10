// others
import { AXIOS_INSTANCE } from '../enviroments';

// intercept request
const doAxiosRequestIntercept = () => {
  // const commonApiFields = {
  //   commonHeaderProperties: "Im a test, just delete me",
  // };
  AXIOS_INSTANCE.interceptors.request.use(
    async (config) => {
      const mConfig = {
        ...config,
        data: {
          // ...commonApiFields,
          ...config.data,
        },
      };
      return mConfig;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};

export default doAxiosRequestIntercept;
