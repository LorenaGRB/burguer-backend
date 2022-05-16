import { favServices } from "../../services/index.js";

const { 
  isEmpty, 
  findAllFavs, 
  findFavsById, 
  createNewFav,
  saveNewFav,
  deleteOneFav
} = favServices;

// Controller get all Favs
export const getAllLists = async (req, res) => {
  try {
    const favs = await findAllFavs()
    if (isEmpty()) {
      res.status(204).send();
    }else {
      res.status(200).json(favs);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Controller get one fav
export const getOneList = async (req, res) => {
  try{
    const { id: idFav } = req.params;
    const fav = await findFavsById(idFav)
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Controller create one fav
export const createList = async (req, res) => {
  try {
    const fav = createNewFav({ ...req.body });
    const newFav = await saveNewFav(fav);
    newFav && res.status(201).json(newFav);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller delete by id
export const deleteList = async (req, res) => {
  const { id: idFav } = req.params;
  try {
    const favToDelete = await findFavsById(idFav);
    if (!favToDelete) {
      res.status(204).send({ err: "No fav to delete" });
    } else {
      const deletedFav = await deleteOneFav(favToDelete);
      if (deletedFav) res.status(200).json(deletedFav);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
