import React from "react";

const UserContext = React.createContext('Hare Krishna')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer}
export default UserContext