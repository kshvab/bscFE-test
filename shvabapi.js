var mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const models = require('../models');
const task = models.task;

router.post('/createtask', (req, res) => {
  const agent = req.body.agent;
  const title = req.body.title;
  const description = req.body.description;
  const fulltext = req.body.fulltext;
  const tags = req.body.tags;
  const status = req.body.status;

  task
    .create({
      _id: new mongoose.Types.ObjectId(),
      agent,
      title,
      description,
      fulltext,
      tags,
      status
    })
    .then(taskToDB => {
      console.log('Добавлен новый task:\n' + taskToDB);
      res.json({
        ok: true
      });
    })
    .catch(err => {
      console.log('K8 ERROR: Не получилось добавить task в базу');
      console.log(err);
      res.json({
        ok: false,
        error: 'Ошибка, попробуйте позже!'
      });
    });
});

router.get('/tasks', function(req, res) {
  task
    .find()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log('K8 ERROR: Не получилось найти task в базе');
      console.log(err);
      res.json({
        ok: false,
        error: 'Ошибка, попробуйте позже!'
      });
    });
});

router.get('/task/:id', function(req, res) {
  let _id = req.params.id;
  task
    .findOne({ _id })
    .then(task => {
      if (task) {
        res.json(task);
      } else res.json(undefined);
    })
    .catch(err => {
      console.log('K8 ERROR: Не получилось найти task в базе');
      console.log(err);
      res.json({
        ok: false,
        error: 'Ошибка, попробуйте позже!'
      });
    });
});

router.delete('/deletetask/:id', (req, res) => {
  let _id = req.params.id;
  task
    .deleteOne({ _id })
    .then(DBanswer => {
      //console.dir(DBanswer);
      res.json({
        ok: true
      });
    })
    .catch(err => {
      console.log('K8 ERROR: Не получилось удалить' + err);
      res.json({
        ok: false,
        error: 'K8 ERROR: Не получилось удалить' + err
      });
    });
});

router.put('/edittask/:id', (req, res) => {
  let _id = req.params.id;
  const agent = req.body.agent;
  const title = req.body.title;
  const description = req.body.description;
  const fulltext = req.body.fulltext;
  const tags = req.body.tags;
  const status = req.body.status;

  task
    .findOne({ _id })
    .then(taskFromDB => {
      if (taskFromDB) {
        taskFromDB.agent = agent;
        taskFromDB.title = title;
        taskFromDB.description = description;
        taskFromDB.fulltext = fulltext;
        taskFromDB.tags = tags;
        taskFromDB.status = status;
        taskFromDB.save();
        res.json({
          ok: true
        });
      }
    })
    .catch(err => {
      console.log('K8 ERROR: Не получилось добавить task в базу');
      console.log(err);
      res.json({
        ok: false,
        error: 'Ошибка, попробуйте позже!'
      });
    });
});

module.exports = router;
