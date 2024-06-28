const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Create a new poll
app.post('/poll', async (req, res) => {
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

// Get poll by id
app.get('/poll/:id', async (req, res) => {
  const { id } = req.params;
  const poll = await prisma.poll.findUnique({
    where: { id },
    include: { options: true }
  });
  res.json(poll);
});

// Vote for an option
app.post('/poll/:id/vote', async (req, res) => {
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
app.get('/poll/:id/results', async (req, res) => {
  const { id } = req.params;
  const poll = await prisma.poll.findUnique({
    where: { id },
    include: { options: true }
  });
  res.json(poll);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
