module.exports = {
    
    createNewToon: (req, res) => {
        const dbInstance = req.app.get( 'db' );
        const { Name, Species, CharacterHeightInFeet, Saying, URL } = req.body;
        
        dbInstance.createNewToon([ Name, Species, CharacterHeightInFeet, Saying, URL ])
        .then( (resVal ) => {
            console.log( resVal );
            res.status(200).send( resVal );
        }).catch( (errorMessage) => {
            console.log( errorMessage );
            res.status(500).send( errorMessage );
        })
    },
    getAllToons: (req, res) => {
        const dbInstance = req.app.get( 'db' );
        
        dbInstance.getToons()
        .then( (completeTableElement) => {
            console.log(completeTableElement);
            console.log(req.body);
            res.status(200).send(products);
        }).catch( (errorMessage) => {
            console.log(errorMessage);
            res.status(500).send( errorMessage );
        });
    },
    uploadPictureLink: (req, res) => {
        const dbInstance = req.app.get( 'db' );
        const { params, query } = req;

        dbInstance.createNewToon([ params.id, query.url ])
        .then( (formattedTable) => {
            console.log(formattedTable);
            console.log(`Params of URL: ${req.params}`, `Query made in URL ${req.query}`);
            res.status(200).send(products);
        }).catch( (err) => {console.log(err); 
            res.status(500).send(err);
        })
    }
    // Need to make:

    
    //getSpecificToon controller
    
    //get deleteToon controller
    
    
    
    



}