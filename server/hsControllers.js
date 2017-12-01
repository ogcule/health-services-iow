import { db } from './dbConnection';

const getAllServices = (req, res, next) => {
  db.any('select * from service').then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    return next(err);
  });
}

// get services by Category
const getServicesByCategory = (req, res, next) => {
  db.any('SELECT * FROM service WHERE category = $1', req.params.category)
    .then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    return next(err);
  });
}
// get services by tags, searches for service with tag anywhere in tags array
const getServicesByTags = (req, res, next) => {
  db.any('SELECT * FROM service WHERE $1 = ANY (tags)', req.params.tag)
    .then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    return next(err);
  });
}
// search by both category and tags
const getServicesByBoth = (req, res, next) => {
  db.any('SELECT * FROM service WHERE category = $1 AND $2 = ANY (tags)',
  [req.params.category, req.params.tag])
    .then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    return next(err);
  });
}
// search using full text search
const getFullText = (req, res, next) => {
  db.any('SELECT * FROM service WHERE tsv @@ plainto_tsquery(\'english\', $1)',
  req.params.search)
  .then((data) => {
  res.status(200).json(data);
}).catch((err) => {
  return next(err);
});
}

const createService = (req, res, next) => {
  let newService = req.body;
  /* The following makes sure a string is given when inserting the tags, if array was given you
  would get an array of arrays */
  newService.tags = typeof(newService.tags) === 'string' ? newService.tags : newService.tags.join(', ');
  // use db.one if no returning data or use db.one if using returning data
  db.one('INSERT INTO service(name, category, description, image, link, email, telephone, address, rcgp, postcode, tags, referral) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id',
    [newService.name,
     newService.category,
     newService.description,
     newService.image,
     newService.weblink,
     newService.email,
     newService.telephone,
     newService.address,
     newService.rcgpCategory,
     newService.postcode,
     `{${newService.tags}}`, // tags is array in the database
     newService.referral,
    ])
    .then((data) => {
      res.status(200)
        .json(data.id);
    })
    .catch((err) => {
      return next(err);
    });
}

const updateService = (req, res, next) => {
  let service = req.body;
  db.none('update service set name=$1, category=$2, description=$3 where id=$4',
    [service.name, service.category, service.description, parseInt(req.params.id)])
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: `Updated service`
        });
    })
    .catch((err) => {
      return next(err);
    });
}
const removeService = (req, res, next) => {
  let serviceName = req.params.name;
  db.result('delete from service where name = $1', serviceName)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${serviceName} service`
        });
    })
    .catch((err) => {
      return next(err);
    });
}
export {
  getAllServices,
  createService,
  updateService,
  removeService,
  getServicesByCategory,
  getServicesByTags,
  getServicesByBoth,
  getFullText,
};
