const express = require('express');
const app = express();

const data = {
		message: "Curso encontrado satisfactoriamente",
		top:{
			version_top: 27,
			students: 10,
			names: [
				"Oscar", 
				"Nicolas", 
				"Jean", 
				"Diego", 
				"Camilo", 
				"Michael",
				"Andres",
				"Sebastian",
			]
		}
}



app.get('/my-first-endpoint', (req, res) => {
    res.json(data);
    res.sendStatus(200);
    
});

app.listen(8080, () => console.log("Listening on port 8080"));