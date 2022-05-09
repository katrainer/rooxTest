import {instance} from './a1-apiConfig/apoConfig';

export const usersApi = {
    getUsers() {
        return instance.get<UserType[]>('users').then(res => res.data)
    },
}

//type
export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}