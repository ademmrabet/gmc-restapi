const User = require('../models/User')

module.exports.getAllUsers = async(req, res) => {
    User.find()
      .then((users) => res.send(users))
      .catch((err) => console.log(err));
  };

module.exports.addUser=async(req, res) => {
    console.log(req.body);
    const { name, lastName, age } = req.body;
    const newUser = new User({
      name,
      lastName,
      age,
    });
    newUser
      .save()
      .then((response) => res.send(`user created:${response}`))
      .catch((err) => console.log(err));
  };
  
module.exports.updateUser = async(req, res) => {
    let { _id } =req.params
    User.findByIdAndUpdate({ _id }, {$set: {...req.body }})
    .then(() => res.status(200).json({msg:"updating user ok"}))
    .catch(err =>res.status(400).json(err))
};

module.exports.deleteUser = async(req, res) =>{
    let {_id} =req.params
    User.findByIdAndRemove(_id)
    .then(()=>res.status(200).json({msg:"user deleted"}))
    .catch(err=>res.status(400).json(err))

}