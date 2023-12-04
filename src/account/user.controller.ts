import { Request, Response, response } from 'express';
import  {UserService}  from './user.service';
import { User } from './user.model';



export class UserController {

    GetUserAccountRequest = async (req: Request, res: Response) => {

       

        const userService = new UserService();

        try {

                const user = await userService.ExistingUserId(req.query['user_id'] as string);
                if (user instanceof User) {
                    // If the user exists, send the user details
                    res.send({
                        id: user.id,
                        userid:user.userid,
                        name: user.name,
                        email: user.email,
                        created: user.created,
                    });
                }
                else
                {
               
                    const user = await userService.CreateUserAccount(req.query['user_id'] as string);

                    if(user) {

                        res.send(user.userid);
                    } 

                }
        } 
        catch (error) {
            if (error instanceof Error) {
                
                res.status(500).json({ error: error.message });
            } 
        }
    };


}

