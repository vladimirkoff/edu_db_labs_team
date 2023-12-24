const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.post('/result', (req, res) => {
  const { title, description, request_id } = req.body;
  
  if(!(title && description && request_id)) {
    res.send('There is empty field.');
    return;
  }
  
  connection.query(
    `INSERT INTO result (id, title, description, request_id) 
    VALUES (DEFAULT, '${title}', '${description}', ${request_id})`,
  (error) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send('Record has been added');
  });
});
  
router.post('/result/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, request_id } = req.body;
  
  if(!(title && description && request_id)) {
    res.send('There is empty field.');
    return;
  } 
  
  connection.query(
    `INSERT INTO result (id, title, description, request_id) 
    VALUES (${id}, '${title}', '${description}', ${request_id})`,
  (error) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send('Record has been added');
  });
});
  
router.get('/results', (req, res) => {
  connection.query('SELECT * FROM result', 
  (error, result) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send(result);
  });
});
  
router.get('/result/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM result WHERE id = ${id}`,
  (error, result) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send(result);
  });
});
  
router.put('/result/:id', (req, res) => {
  const id = req.params.id;
  
  connection.query(`SELECT * FROM result WHERE id = ${id}`,
  (error, [result]) => {
    if (error) {
      console.log(result);
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    const { title, description, request_id } = { ...result, ...req.body};
    connection.query(
      `UPDATE result 
      SET title = '${title}', 
      description = '${description}', 
      request_id = ${request_id} 
      WHERE id = ${id}`,
    (error) => {
      if (error) {
        console.log(error);
        res.send('Something went wrong.');
        return;
      }
      res.send('Record has been updated');
    });
  });
});
  
router.delete('/result/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM result WHERE id = ${id}`,
  (error) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send('Record has been deleted');
  });
});

module.exports = router;