import { User } from "./user.interface";

export interface LoginResponse {
    accessToken: string,
    userInfo: User
}