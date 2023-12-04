import {DatabaseManager} from '../database/database'
import {User} from './user.model'



export class UserService {
    
    

    ExistingUserId = async(userid:string):Promise<User | Boolean> => {

        try {

            const userRepository = DatabaseManager.getDatabase().getRepository(User);
            const user = await userRepository.findOne({ where: { userid } })

            if(user) {

                return user;

            } 
            else {

                return false;
            }
        }
        catch(error){

            return false;
        }
    }
    CreateUserAccount = async(userid:string):Promise<User> => {

        try {

            const userRepository = DatabaseManager.getDatabase().getRepository(User);

            const newUser = new User();
            newUser.userid = userid;
            newUser.email='rgrg';
            newUser.name='grr';
            
            const user = await userRepository.save(newUser);
            return user;
        }
        catch(error){

            throw error;
        }
    }




}

