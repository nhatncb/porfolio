/* eslint-disable max-len */
export const INSTALLATION_ID = '@skeleton_installationId';

export const REGEX = {
  PASSWORD_POLICY:
    // eslint-disable-next-line no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!\"#$%&'()*+,-./:;<=>?@^_`{|}~\[\]]{8,}$/,
  KATAKANA: /^[ｧ-ﾝﾞﾟァ-・ヽヾ゛゜ー()-.（-）]+$/,
  // eslint-disable-next-line no-useless-escape
  URL: /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
  PASSWORD: /^[a-zA-Z0-9!@#$%^&*-?_]{8,}$/,
  PHONE: /^[0-9]{10,12}$/,
  MIN_8_CHARS: /.{8,}/,
  ZIP_CODE: /[0-9]{3}-[0-9]{4}/,
  EMAIL: /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i, // https://colinhacks.com/essays/reasonable-email-regex
};

export enum DateFormat {
  MONTH_YEAR_SHORT = 'MM/YY',
  YEAR_MONTH_DATE = 'YYYY/MM/DD',
  YEAR_MONTH = 'YYYY/MM',
  YEAR_MONTH_DASH = 'YYYY-MM',
  YEAR_MONTH_DATE_DASH = 'YYYY-MM-DD',
  YEAR_MONTH_DATE_HOUR = 'YYYY/MM/DD HH:mm',
  YEAR_MONTH_DATE_HOUR_DASH = 'YYYY-MM-DD HH:mm',
  HOUR_YEAR_MONTH_DATE = 'HH:mm YYYY-MM-DD',
  HOUR_YEAR_MONTH_DATE_JP = 'HH:mm YYYY年MM月DD日',
  YEAR_MONTH_DATE_HOUR_JP = 'YYYY年MM月DD日 HH:mm',
  YEAR_MONTH_DATE_JP = 'YYYY年MM月DD日',
  YEAR_MONTH_JP = 'YYYY年MM月',
  YEAR_MONTH_DATE_HOUR_MS = 'YYYY/MM/DD HH:mm:ss',
  MONTH_DATE_HOUR_JP = 'YYYY年MM月DD日 HH時mm分',
  ISO = 'YYYY-MM-DDTHH:mm:ss.sss[Z]',
}
