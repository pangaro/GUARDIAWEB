import { getConnection, queries } from "../database";

export const getServicio = async (req, res) => {
    try {
        const pool = await getConnection();
    
        const result = await pool.request()
            .execute(queries.getAllServicios);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewServicio = async (req, res) => {
    try {
        const { Servicio, ServicioDependenciaID, SinCronograma, PermisoGuardia } = req.body;
    
        const pool = await getConnection();
      
        const result = await pool.request()
            .input("servicio", Servicio)
            .input("servicioDependenciaID", ServicioDependenciaID)
            .input("sinCronograma", SinCronograma)
            .input("permisoGuardia", PermisoGuardia)
            .execute(queries.addNewServicio);
    
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getServicioById = async (req, res) => {
    try {
        const { id } = req.params.id;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("servicioId", id)
            .execute(queries.getServicioById);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteServicioById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("servicioId", id)
            .execute(queries.deleteServicioById);

        res.json(result.recordset[0]);
        //res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateServicioById = async (req, res) => {
    try {
        const { Servicio, ServicioDependenciaID, SinCronograma, PermisoGuardia } = req.body;

        const { id } = req.params;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("servicioId", id)
            .input("servicio", Servicio)
            .input("servicioDependenciaID", ServicioDependenciaID)
            .input("sinCronograma", SinCronograma)
            .input("permisoGuardia", PermisoGuardia)
            .execute(queries.updateServicioById);

        res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};