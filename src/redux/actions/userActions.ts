interface User {
    userName: string
    password: string
}

export type UserAction = {
    type: 'USER_LOGIN';
    payload: User;
}

export const userLogin = (user: User): UserAction => ({
    type: 'USER_LOGIN',
    payload: user
})