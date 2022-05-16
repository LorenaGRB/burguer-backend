import axios from 'axios'

describe('userTest', () => {

  //URL
  const urlCreateUser = "http://localhost:5000/auth/local/create";
  const urlLogin = "http://localhost:5000/auth/local/login";

  //Body (IF YOU WANT TO PROBE CREATEUSER YOU HAVE TO CHANGE THE EMAIL)
  const bodyTest = {
    email: "test538@gmail.com",
    password: "123"
  }
  //Don´t change this const
  const bodyTestFalse = {
    email: "test@gmail.com",
    password: "123"
  }

 //Body (IF YOU WANT TO PROBE CREATEUSER YOU HAVE TO CHANGE THE EMAIL OF THE BODYTEST)
  it('should create a new user ', async() => {
    const result = await axios.post(
      urlCreateUser,
      bodyTest
      )
      expect(result.status).toEqual(201);
      expect(result.data).toBeDefined();
      expect(result.data.email).toBe(bodyTest.email);
  });

  
  it('shouldnt permit to create a new user ', async() => {
    const result = await axios.post(
      urlCreateUser,
      bodyTest
      ).catch(function (error) {
        return error.toJSON()
      });
      expect(result.status).toEqual(500);
  });

  it('should login and obtein token', async () => {
    const result = await axios.post(
      urlLogin,
      bodyTest
      )
      expect(result.status).toEqual(200);
      expect(result.data.token).toBeDefined();
  });
  
  it('shouldnt permit to login ', async() => {
    const result = await axios.post(
      urlLogin,
      bodyTestFalse
      ).catch(function (error) {
        return error.toJSON()
      });
      expect(result.status).toEqual(404);
  });
})


