import {pool} from '../db.js'

export const getEmpleados = async(req, res) => {
    //throw new Error('Mi error')
    try {
        const [rows] = await pool.query('SELECT * FROM empleado')
        res.json(rows)    
    } catch (error) {
        return res.status(500).json({ message: "Algo va mal" }); 
    }
    
}

export const getEmpleado = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [id,]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Empleado no encontrado" });
      }  

      res.json(rows[0]);

    } catch (error) {
      return res.status(500).json({ message: "Algo va mal" });
    }
};

export const deleteEmpleados = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("DELETE FROM empleado WHERE id = ?", [id]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Empleado no encontrado" });
      }
  
      res.sendStatus(204);

    } catch (error) {
      return res.status(500).json({ message: "Algo va mal" });
    }
};

export const createEmpleado = async (req, res) => {
    try {
        const {nombre, salario} = req.body
        const [rows] = await pool.query('INSERT INTO empleado(nombre, salario) VALUES  (?, ?)', [nombre, salario])
        res.status(201).json({ 
            id : rows.insertId,
            nombre,
            salario
        })   
    } catch (error) {
        return res.status(500).json({ message: "Algo va mal" });
    }
    
}

export const updateEmpleado = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, salario } = req.body;
  
      const [result] = await pool.query(
        "UPDATE empleado SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?",
        [nombre, salario, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "empleado no encontrado" });
  
      const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Algo va mal" });
    }
}
