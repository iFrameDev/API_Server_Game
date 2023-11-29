import {UserType} from './user.model'
import {DatabaseManager} from '../database/database'
import {User} from './user.model'



export class UserService {
    


    ExistingUserName = async (name:string):Promise<boolean> => {

    try 
    {
        const userRepository = DatabaseManager.getDatabase().getRepository(User);
        const userName = await userRepository.findOne({ where: { name } });

        return !!userName; 

    }
    catch(error){
      return false;
    }
    
}
    ExistingUserByEmail = async(email:string):Promise<boolean> => {

        try {

            const userRepository = DatabaseManager.getDatabase().getRepository(User);
            const userEmail = await userRepository.findOne({ where: { email } })

            if(userEmail) {

                return true;

            } 
            else {

                return false;
            }
        }
        catch(error){

            return false;
        }
    }

    FindUserByName = async(name:string):Promise<User> => {
            
        try {

            const userRepository = DatabaseManager.getDatabase().getRepository(User);
            const user = await userRepository.findOne({ where: { name } });

            if(user) {

                return user;

            } 
            else {

                throw new Error('Cet utilisateur n\'existe pas !');
            }
        }
        catch(error){

            throw error;
        }
    }

    GetUserCharacter = async() =>{
        return 'salut !';
    }


}

