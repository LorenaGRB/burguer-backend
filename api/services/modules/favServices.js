import { FavModel } from '../../models/index.js';

const isEmpty = () =>{
  return FavModel.length === 0
}

const findAllFavs = () => {
  return FavModel.find();
} 

const findFavsById = (idFav) => {
  return  FavModel.findById(idFav);
}

const createNewFav = (data) => {
  return new FavModel({ ...data})
}

const saveNewFav = (data) => {
  return data.save()
}

const deleteOneFav = (data) => {
  return FavModel.deleteOne(data)
}

export { 
  isEmpty ,
  findAllFavs, 
  findFavsById, 
  createNewFav,
  saveNewFav,
  deleteOneFav
}