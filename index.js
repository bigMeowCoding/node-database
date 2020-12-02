const { Sequelize, Model, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("zhouyijun", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});


class Person extends Model {}
Person.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });
//
// (async () => {
//     await sequelize.sync();
//     const jane = await Person.create({
//         username: 'janedoe',
//         birthday: new Date(1980, 6, 20)
//     });
// })();

async function query() {
    const person =  await Person.findAll()
    console.log(JSON.stringify(person))
}
// query()
async function del() {
    await Person.destroy({
        where: {
            id: 1
        }
    });
}
