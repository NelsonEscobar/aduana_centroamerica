const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const {
  esDataPaisValido,
  existeDataCostaRicaPorId,
} = require("../helpers/db-validators");

const {
  datacostaricaGet,
  datacostaricaPost,
  datacostaricaPut,
  datacostaricaDelete,

} = require("../controllers/datacostarica");

const router = Router();

router.get("/", datacostaricaGet);

router.post(
  "/",
 [
    check("codigo", "El codigo es requerido").not().isEmpty(),
    check("nombreproyecto", "El nombre es requerido").not().isEmpty(),
    check("paisqueejecuta", "El pais es requerido").not().isEmpty(),
    check("paisqueejecuta").custom(esDataPaisValido),
    validarCampos,
  ],
  datacostaricaPost
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeDataCostaRicaPorId),
    check("codigo", "El codigo es requerido").not().isEmpty(),
    check("nombreproyecto", "El nombre es requerido").not().isEmpty(),
    check("paisqueejecuta", "El pais es requerido").not().isEmpty(),
    check("paisqueejecuta").custom(esDataPaisValido),
    validarCampos,
  ],
  datacostaricaPut
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeDataCostaRicaPorId),
    validarCampos,
  ],
  datacostaricaDelete
);

module.exports = router;
