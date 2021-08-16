import { getConnection, queries } from "../database";

export const getCategoria = async (req, res) => {
    try {
        const pool = await getConnection();
    
        const result = await pool.request()
            .execute(queries.getAllCategorias);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewCategoria = async (req, res) => {
    try {
        const { Categoria, Descripcion } = req.body;
    
        const pool = await getConnection();
      
        const result = await pool.request()
            .input("categoria", Categoria)
            .input("descripcion", Descripcion)
            .execute(queries.addNewCategoria);
    
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getCategoriaById = async (req, res) => {
    try {
        const { id } = req.params.id;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("categoria", id)
            .execute(queries.getCategoriaById);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteCategoriaById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("categoria", id)
            .execute(queries.deleteCategoriaById);

        res.json(result.recordset[0]);
        //res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateCategoriaById = async (req, res) => {
    try {
        const { Descripcion } = req.body;

        const { id } = req.params;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("categoria", id)
            .input("descripcion", Descripcion)
            .execute(queries.updateCategoriaById);

        res.json(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};