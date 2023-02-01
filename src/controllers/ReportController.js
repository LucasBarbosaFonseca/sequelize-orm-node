const { Op } = require('sequelize');
const User = require('../database/models/User');

module.exports = {
  async show(req, res) {
    const user = await User.findAll({
        attributes: ['name', 'email'],
        where: {
          email: {
            [Op.iLike]: '%@rocketseat.com.br'
          }
        },
        include: [
          { association: 'addresses', where: { street: 'Rua Guilherme Gembala' } },
          {
            association: 'techs',
            where: {
              name: {
                [Op.iLike]: 'React%'
              }
            },
          }
        ]
    });

    return res.json(user);
  }
};