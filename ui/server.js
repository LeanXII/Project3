
// Not sure if this server will be needed for user saved searches 


app.post('/api/save-search', (req, res) => {
    const { userId, searchText } = req.body;
  
    knex('searches').insert({ user_id: userId, search_text: searchText })
      .then(() => res.status(200).send({ message: 'Search saved successfully' }))
      .catch(err => {
        console.error('Error saving search:', err);
        res.status(500).send({ message: 'Error saving search' });
      });
  });