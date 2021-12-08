const db = require('./connection');
const { User, Interest, Category } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    const users = await User.create(
        { 
            firstName: 'Jo',
            lastName: 'Shmo',
            userName: 'JoShmo1996',
            email: 'joshmosocool@gmail.com',
            password: 'password',
            tierList: [
                {
                    interests: [rank[2]._id, ]
                }
            ]
        }
    )
    await Interest.deleteMany();
})