/**
 * @param {string} host
 * @param {string} user
 * @param {Object[]} booking
 * @param {string} booking[].status
 */
const getStatus = (host, user, booking) => {
  const status = {
    pending: `Hey ${user}, we're awaiting confirmation from ${host}`,
    confirmed: `Hey ${user}, ${host} is excited to be hosting you!`,
    canceled: `Unfortunately ${user}, ${host} has canceled your booking request`,
    done: `${host} hopes you had a great stay!`,
  };

  return status[booking.status];
};

// sample usage
const booking1 = {
  status: 'pending',
};
console.log(getStatus('John', 'Blane', booking1));
const booking2 = {
  status: 'confirmed',
};
console.log(getStatus('John', 'Blane', booking2));
