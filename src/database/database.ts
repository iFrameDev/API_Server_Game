import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../user/user.model";
import { Client } from "pg";



export  class DatabaseManager{

    private static dataSource:DataSource;

    constructor() {

        DatabaseManager.dataSource = new DataSource({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "root",
          password: 'test',
          database: "ProjectLifeDatabase",
          entities: [User],
          synchronize: true,
          logging: false,
        });
    }

     initializeDatabase = async() => {

        try {
            await DatabaseManager.dataSource.initialize();
            console.log('La base de données a été chargée !');
        } catch (error) {
            console.error('Erreur lors du chargement de la base de données :', error);
            // Vous pouvez ajouter ici des instructions pour gérer l'erreur, par exemple, envoyer une réponse d'erreur HTTP si vous êtes dans un serveur Node.js.
        }
        // Votre code d'initialisation de la base de données
    }
    static getDatabase = () => {
        return DatabaseManager.dataSource;
    }

}   

