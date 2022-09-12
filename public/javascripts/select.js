
//Вывод записей по ownerid
exports.select_lines_by_ownerid = function(req, res) {
    dbcontext.query(
        'SELECT * FROM contactreq WHERE "ownerId" = :ownerId',
        {
            replacements: { ownerId: req.params.ownerId },
            type: dbcontext.QueryTypes.SELECT
        }
    )
    .then(data => {
      res.json(data[0]);
      statfield.textContent = data.message;
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
}