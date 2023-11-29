
describe('UserServiceTest', () => {

	const userServiceMock = {

		CreateNewUser: jest.fn(),
		ExistingUserName: jest.fn(),
		ExistingUserByEmail: jest.fn(),
		CryptPassword: jest.fn(),
	};

	describe('CreateNewUser', () => {

		it('devrait créer un nouvel utilisateur avec succès', async () => {

			userServiceMock.CreateNewUser.mockResolvedValue({
				name: 'nouvel_utilisateur',
				email: 'nouveau@email.com',
				password: '',
			})

			const newUser = {
				name: 'nouvel_utilisateur',
				email: 'nouveau@email.com',
				password: 'mot_de_passe',
			};

			const result = await userServiceMock.CreateNewUser(newUser);

			expect(result).toEqual({ ...newUser, password: '' });

		});

		it('devrait générer une erreur lors de la création d\'un nouvel utilisateur', async () => {
			// Configurez CreateNewUser pour générer une erreur
			userServiceMock.CreateNewUser.mockRejectedValue(new Error('Une erreur s\'est produite lors de la création d\'un utilisateur'));
		
			const newUser = {
			  name: 'nouvel_utilisateur',
			  email: 'email_invalide', // Ceci pourrait être une entrée incorrecte pour générer une erreur
			  password: 'mot_de_passe',
			};
		
			try {
			  await userServiceMock.CreateNewUser(newUser);
			  fail("Je m'attendais à ce qu'une erreur soit générée.");
			} catch (error) {
			  // Assurez-vous que l'erreur est une instance de l'objet Error
			  expect(error instanceof Error).toBe(true);

			}
		  });
	});

	describe('CryptPassword', () => {


		it('devrait hacher un mot de passe avec succès', async () => {

			userServiceMock.CryptPassword.mockResolvedValue('string');

			const password = 'password123'; // Le mot de passe que vous souhaitez hacher
			
			const hashedPassword = await userServiceMock.CryptPassword(password);
			
			// Assurez-vous que le résultat est une chaîne de caractères (un hachage)
			expect(typeof hashedPassword).toBe('string');


		  });

		// Testez le cas où une erreur est générée
		it('devrait générer une erreur si le hachage échoue', async () => {
			userServiceMock.CryptPassword.mockRejectedValue(new Error('Erreur de hachage'));
			const password = 'thrthrth'; // Le mot de passe que vous souhaitez hacher
		  
			try {
			  await userServiceMock.CryptPassword(password);
			  fail("Je m'attendais à ce qu'une erreur soit générée");
			} catch (error) {
			  // Assurez-vous que l'erreur est une instance de l'objet Error
			  expect(error instanceof Error).toBe(true);
			  // Vous pouvez également vérifier le message d'erreur ou d'autres propriétés de l'erreur si nécessaire
	
			}
		  });
	});
	describe("verifie si l'email d'un utilisateur existe en base de donnée", () => {

		it("Dois confirmer que l'utilisateur existe", async() =>{

			userServiceMock.ExistingUserByEmail.mockResolvedValue(true);

				const verifEmail = await userServiceMock.ExistingUserByEmail('rthrth@rthrthrt.fr');
				expect(verifEmail).toBe(true);
		
		})

		it("Dois confirmer que l'utilisateur n'existe pas", async() =>{
			userServiceMock.ExistingUserByEmail.mockResolvedValue(false);

			const verifEmail = await userServiceMock.ExistingUserByEmail('rthrt@thrthhrt.fr');
			expect(verifEmail).toBe(false);
		})

	})
	describe("verifie un utilisateur existe en base de donnée par son nom ", () => {

		it("Dois confirmer que l'utilisateur existe", async() =>{

			userServiceMock.ExistingUserName.mockResolvedValue(true);

				const verifEmail = await userServiceMock.ExistingUserName('paul');
				expect(verifEmail).toBe(true);
		
		})

		it("Dois confirmer que l'utilisateur n'existe pas", async() =>{
			userServiceMock.ExistingUserName.mockResolvedValue(false);

			const verifEmail = await userServiceMock.ExistingUserName('paul');
			expect(verifEmail).toBe(false);
		})

	})
});

