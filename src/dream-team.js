module.exports = function createDreamTeam(arr) {
  let result = [];

  if (Array.isArray(arr)) {
    arr.forEach(name => {
      if (typeof name === 'string') {
        name = name.trim();
        result.push(name[0].toUpperCase());
      }
    });

    return result.sort().join('');
  } else return false;
};
