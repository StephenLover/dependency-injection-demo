const getUser = (username) => {
  return documentClient.get({ username });
}

const createUser = (username, password) => {
  return documentClient.put({ username, password });
}

export {
  getUser,
  createUser
}