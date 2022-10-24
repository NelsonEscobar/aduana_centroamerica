const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const {
  existeDataGuatemalaPorId,
} = require("../helpers/db-validators");

const {
  dataguatemalaGet,
  dataguatemalaPost,
  dataguatemalaPut,
  dataguatemalaDelete

} = require("../controllers/dataguatemala");

const router = Router();

router.get("/", dataguatemalaGet);

router.post(
  "/",
  [
    check("codigo", "El codigo es requerido").not().isEmpty(),
    check("nombreproyecto", "El nombre es requerido").not().isEmpty(),
    check("monto", "El monto es requerido").not().isEmpty(),
    validarCampos,
  ],
  dataguatemalaPost
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeDataGuatemalaPorId),
    check("codigo", "El codigo es requerido").not().isEmpty(),
    check("nombreproyecto", "El nombre es requerido").not().isEmpty(),
    check("monto", "El monto es requerido").not().isEmpty(),
    validarCampos,
  ],
  dataguatemalaPut
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeDataGuatemalaPorId),
    validarCampos,
  ],
  dataguatemalaDelete
);

module.exports = router;
