import {DatabaseManager} from '../database/database'
import {Character} from './character.model'


export class CharacterService {

    GetAllCharacter = async(userid:string) => {

        const characterRepository = DatabaseManager.getDatabase().getRepository(Character);
        characterRepository.find({where: {userid}})

    }

}