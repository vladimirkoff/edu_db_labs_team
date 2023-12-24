const express = require('express');
const connection = require('./connection');
const router = express.Router();

const handleErrors = (res, error, successMessage) => {
  if (error) {
    console.log(error);
    res.send('Сталася помилка');
    return false;
  }
  res.send(successMessage);
  return true;
};

router.post('/results', async (req, res) => {
  const { title, description, request_id } = req.body;

  if (!(title && description && request_id)) {
    return res.send('Пусте поле');
  }

  try {
    const result = await connection.query(
      'INSERT INTO result (id, title, description, request_id) VALUES (DEFAULT, ?, ?, ?)',
      [title, description, request_id]
    );

    handleErrors(res, result.error, 'Додано');
  } catch (error) {
    handleErrors(res, error, 'Сталася помилка');
  }
});

router.get('/results', async (req, res) => {
  try {
    const results = await connection.query('SELECT * FROM result');
    res.send(results);
  } catch (error) {
    handleErrors(res, error, 'Сталася помилка');
  }
});

router.get('/result/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await connection.query('SELECT * FROM result WHERE id = ?', [id]);
    res.send(result);
  } catch (error) {
    handleErrors(res, error, 'Сталася помилка');
  }
});

router.put('/result/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const [existingResult] = await connection.query('SELECT * FROM result WHERE id = ?', [id]);

    if (!existingResult) {
      return res.send('Результат не знайдено');
    }

    const updatedResult = { ...existingResult, ...req.body };
    await connection.query(
      'UPDATE result SET title = ?, description = ?, request_id = ? WHERE id = ?',
      [updatedResult.title, updatedResult.description, updatedResult.request_id, id]
    );

    handleErrors(res, null, 'Оновлено');
  } catch (error) {
    handleErrors(res, error, 'Сталася помилка');
  }
});

router.delete('/result/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await connection.query('DELETE FROM result WHERE id = ?', [id]);
    handleErrors(res, result.error, 'Видалено');
  } catch (error) {
    handleErrors(res, error, 'Сталася помилка');
  }
});

module.exports = router;
