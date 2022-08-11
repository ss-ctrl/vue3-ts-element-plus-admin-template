/**
 * @author V
 * @description 封装本地缓存工具类
 * @time 2022-08-11 10:48:47
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}

// 这里最好不要直接export new 类()  为了vscode代码提示
const localCache = new LocalCache();
export default localCache;
