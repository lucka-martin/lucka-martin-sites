import { relativeTimeThreshold, relativeTimeRounding, updateLocale } from 'moment'
import cs from '../extensions/moment/locale/cs'

export default () => {

  updateLocale('cs', cs);

  const thresholds = {
    ss: 10, // a few seconds to seconds
    s: 60,  // seconds to minute
    m: 60,  // minutes to hour
    h: 24,  // hours to day
    d: 31,  // days to month
    M: 12   // months to year
  };

  for (let threshold in thresholds) {
    relativeTimeThreshold(threshold, thresholds[threshold])
  }

  relativeTimeRounding(Math.floor);
}
