import { userServices } from "../../services/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const { 
  findUserByEmail,
  createEncryptedUser, 
  loginUser
} = userServices;

export const createUser = async(req, res) => {
  try {
    const {  email:email, password:password } = req.body;
    const exist_user = await findUserByEmail( email);
    if (exist_user) throw new Error();

    const user = await createEncryptedUser({ ...req.body });
    user && res.status(201).json(user);
  } catch (error) {
    res.status(500).send();
  }
};


export const login = async (req, res) => {  
  try {
    const { code, data } = await loginUser(req.body);

    res.status(code).send(data);
  } catch (error) {
    res
      .status(400)
      .send({ error });
  }
};
