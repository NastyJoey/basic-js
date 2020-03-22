const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNum = parseFloat(sampleActivity, 10);

  if (!sampleActivity 
    || !isFinite(sampleActivityNum)
    || typeof sampleActivity !== 'string' 
    || (sampleActivityNum >= MODERN_ACTIVITY)
    || (sampleActivityNum <= 0)
    ) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / k);
};
