import express from "express";

import { favCtrl } from "../../controllers/index.js";

import { validateToken } from "../../middlewares/index.js";

const { 
  getAllLists, 
  createList, 
  getOneList, 
  deleteList
} = favCtrl;

const router = express.Router();

const favRoutes = {
  GET_ALL_FAVS: "/favs",
  GET_ONE_FAV: "/favs/:id",
  CREATE: "/favs/create",
  DELETE: "/favs/delete/:id",
};

// router.get(favRoutes.GET_ALL_FAVS,  getAllLists);
// router.get(favRoutes.GET_ONE_FAV,  getOneList);
// router.post(favRoutes.CREATE,  createList);
// router.delete(favRoutes.DELETE,  deleteList);


router.get(favRoutes.GET_ALL_FAVS, validateToken, getAllLists);
router.get(favRoutes.GET_ONE_FAV, validateToken, getOneList);
router.post(favRoutes.CREATE, validateToken, createList);
router.delete(favRoutes.DELETE, validateToken, deleteList);

export default router;
