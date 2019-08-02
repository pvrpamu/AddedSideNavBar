export function increment(payload) {
  return {
    type: "ON_INCREMENT",
    payload
  };
}

export function decrement(payload) {
  return {
    type: "ON_DECREMENT",
    payload
  };
}

export function reset(value) {
  return {
    type: "ON_RESET",
    value
  };
}
