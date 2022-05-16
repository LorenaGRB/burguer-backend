import mongoose from "mongoose";
import { getAllLists,getOneList,createList,deleteList } from "../modules/fav.controller.js";

const mockRequest = (body, params) => {
  const req = {};
  req.body = { ...body };
  req.params = { ...params };
  return req;
}

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.next = jest.fn().mockReturnValue(res)
  return res
}

describe ("Fav controller tests",()=>{
  
  beforeAll( async()=>{
    //conecting database of testing
    const dbConnection = "mongodb+srv://root:123@favsapi.szfiv.mongodb.net/test";
    await mongoose.connect(dbConnection)
  })

  afterAll(async() => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.connection.close()
  })

  it('should get all favsLists', async() => {
    const req = mockRequest();
    const res = mockResponse();
    await getAllLists(req,res);
    
    expect(res.status).toHaveBeenCalledWith(200)
  });

  it('should create one favsList', async() => {
    const req = mockRequest();
    const res = mockResponse();
    await createList(req,res);
    
    expect(res.status).toHaveBeenCalledWith(201)
  });
})
