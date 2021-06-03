import puppeteer, { Browser } from 'puppeteer-core';
import store from 'electron-json-storage';

const os = require('os');

// 登录成功的标记位置
const loginFlag = '.buc-header-rightmenu';
// 设置超时登录时间
const loginTimeOut = 60;
// 登录保存的cookies
const loginCookiesSaveKey = 'loginCookiesSaveKey';

class BrowserManager {
  cookies: unknown;

  constructor() {
    store.setDataPath(os.tmpdir());
    this.cookies = {};
  }

  launchBrowser = async (headless = true) => {
    const browser = await puppeteer.launch({
      headless, // 是否‘无头’模式，就不显示UI，只有登录才显示
      // 使用macos的默认目录，暂不考虑非默认路径的情况
      executablePath:
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      // 宽高设置为0可自适应
      defaultViewport: {
        width: 0,
        height: 0,
      },
      args: [
        '--new-window', // 新窗口模式
        '--allow-running-insecure-content', // 禁止同源策略
        '--disable-web-security', // 禁止同源策略
      ],
    });
    return browser;
  };

  validPage = async (browser: Browser) => {
    const page = await browser.newPage();
    // page.setCookie(...globalState.bucCookies);
    return page;
  };

  /**
   * 获取cookies
   */
  bucLogin = async () => {
    const browser = await this.launchBrowser(false);
    const page = await browser.newPage();
    try {
      await page.goto('https://login.alibaba-inc.com/ssoLogin.htm');
      // 下面作为登录的判断依据，增加超时设置
      await page.waitForSelector(loginFlag, {
        timeout: loginTimeOut * 1000, // 60s未登录则认为登录失败
      });
      const pageCookies = await page.cookies();
      if (!pageCookies) {
        return false;
      }

      window.console.log('pageCookies = ${}', typeof pageCookies, pageCookies);

      this.cookies = pageCookies;
      this.saveCookes(pageCookies, (error) => {
        window.console.error('444', error);
      });
      return true;
    } catch (e) {
      window.console.warn('获取cookies失败：${},', e);
      return false;
    }
  };

  /**
   * 获取保存的cookies
   */
  // getCookies = (callback) => {
  //   if (this.cookies) {
  //     callback({
  //       cookies: this.cookies,
  //     });
  //   }

  //   this.getSavedCookies()
  // };
  getCookies = async () => {
    return new Promise((resolve) => {
      if (this.cookies) {
        resolve({
          cookies: this.cookies,
        });
        return;
      }

      this.getStorageCookies((error: unknown, data: object) => {
        if (error) {
          resolve([]);
          return;
        }

        // console.error(data);
        this.cookies = data.cookies;
        resolve(data.cookies);
      });
    });
  };

  /**
   * 获取保存的cookies
   */
  getStorageCookies = (callback) => {
    store.get(loginCookiesSaveKey, callback);
  };

  /**
   * 保存cookies
   * @param cookies
   */
  saveCookes = (cookies: unknown, callback?: unknown) => {
    const obj = {
      cookies,
    };
    store.set(loginCookiesSaveKey, obj, callback);
  };
}

export const {
  launchBrowser,
  bucLogin,
  getCookies,
  getStorageCookies,
} = new BrowserManager();
