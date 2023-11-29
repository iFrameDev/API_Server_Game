import { Request, Response, response } from 'express';
import { UserType } from './user.model';
import  {UserService}  from './user.service';



export class UserController {

    GetUserCharacterRequest = async (req: Request, res: Response) => {


        console.log(req.query['user_id']);

        res.send('salut : ' + req.query['user_id']);
        /*const userService = new UserService();

        try {

                if (!req.query.username || !req.query.password || !req.query.email) {
                    return res.status(400).json({ error: 'Tous les champs sont requis.' });
                }

                const newUser: UserType = {
                    name: req.query.username as string,
                    password: req.query.password as string,
                    email: req.query.email as string,
                };


                const createdUser = await userService.CreateNewUser(newUser);
                res.status(201).json(createdUser);
        } 
        catch (error) {
            if (error instanceof Error) {
                
                res.status(500).json({ error: error.message });
            } 
        }*/
    };


}

