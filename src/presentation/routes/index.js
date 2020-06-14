const { Router } = require("express");
const cors = require('cors');

module.exports = function( { HomeRoutes, LoginRoutes, CalleRoutes, CasoRoutes,CiudadRoutes, ConsultaRoutes, HospitalRoutes, MedicoRoutes, PacienteRoutes, ParteMedicoRoutes, PruebaRoutes, RecursoRoutes, ReporteRoutes} ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/calle", CalleRoutes);
  apiRoute.use("/caso",cors(), CasoRoutes);
  apiRoute.use("/consulta",cors(), ConsultaRoutes);
  apiRoute.use("/ciudad", CiudadRoutes);
  apiRoute.use("/hospital", HospitalRoutes);
  apiRoute.use("/login",cors(), LoginRoutes);
  apiRoute.use("/medico", MedicoRoutes);
  apiRoute.use("/paciente", PacienteRoutes);
  apiRoute.use("/partemedico", ParteMedicoRoutes);
  apiRoute.use("/prueba", PruebaRoutes);
  apiRoute.use("/recurso",cors(), RecursoRoutes);
  apiRoute.use("/reporte", ReporteRoutes);
  
  apiRoute.use("/", HomeRoutes);
  router.use("/", apiRoute);

  return router;
};

