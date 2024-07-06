const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a new poll
router.post('/', async (req, res) => {
  const { question, options } = req.body;
  const poll = await prisma.poll.create({
    data: {
      question,
      options: {
        create: options.map(option => ({ text: option }))
      }
    }
  });
  res.json(poll);
});

// Get poll by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const poll = await prisma.poll.findUnique({
    where: { id: id },
    include: { options: true }
  });
  res.json(poll);
});

// Vote for an option
router.post('/:id/vote', async (req, res) => {
  const { id } = req.params;
  const { optionId } = req.body;
  const option = await prisma.option.update({
    where: { id: optionId },
    data: {
      votes: {
        increment: 1
      }
    }
  });
  res.json(option);
});

// Get poll results
router.get('/:id/results', async (req, res) => {
  const { id } = req.params;
  const poll = await prisma.poll.findUnique({
    where: { id: id },
    include: { options: true }
  });
  res.json(poll);
});

module.exports = router;
