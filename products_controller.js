

module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, imageurl } = req.body; // If it breaks it's because image_url differs from solution.

        dbInstance.create_product([name, description, price, imageurl])
            .then((product) => res.status(200).send(product))
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            });
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_product([params.id])
            .then((product) => {
                console.log(product);
                res.status(200).send(product)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            });
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(products => {
                console.log(products)
                console.log(req.body)
                res.status(200).send(products)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            });
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([params.id, query.desc])
            .then((product) => res.status(200).send(product))
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            });
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_product([params.id]).
            then((product) => res.status(200).send(product))
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            });
    }
};