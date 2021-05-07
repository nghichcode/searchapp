function users(req, res) {
  let limit = req.query && req.query.limit ? req.query.limit : 0;
  let users = [];
  for (let i = 0; i < limit; i++) {
    users.push({
      "name": "user_" + (i + 1),
      "email": "user_" + (i + 1) + "@nc.com",
      "id": i + 1
    });
  }
  res.json({users});
}

module.exports = {users};
