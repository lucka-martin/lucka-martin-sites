import { relativeTimeThreshold } from 'moment'

export default () => {

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
}
