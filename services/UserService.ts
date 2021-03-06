import {TAGS, provide} from "../ioc";

import { IUser } from "../interfaces/IUser";
import { userModel } from "../models/User";

/* @provide 代替了原生的@injectable */
@provide(TAGS.UserService)
export class UserService implements IUser {
    private userStroage:userModel.User[] = [
        {
            uid: "1",
            uname: "huangss",
            upasswd: "123456"
        },
        {
            uid: "2",
            uname: "xj",
            upasswd: "123456"
        }
    ];

    // 查找
    query(uid: number): userModel.User {
        console.log("查找用户");

        return this.userStroage[uid]
    }
}