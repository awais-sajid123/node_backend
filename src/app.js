const express=require('express');

const app=express();


// add a middleware
app.use(express.json());

const notes=[];



// title , description
// Post  /note

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);

    res.status(201).json({
        message: "Note created successfully"
    });
}); 

app.get('/notes', (req,res)=>{
    res.status(200).json({
        message : "notes fetched successfully",
        notes:notes
    })
});

app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;
    delete notes[index]
    res.status(200).json({
        message: "note deleted successfully..."
    })
});

app.patch('/notes/:index', (req,res)=>{

    const index=req.params.index;
    const description=req.body.description;

    notes[index].description=description;

    console.log(notes[index].description);

    const title=req.body.title;
    notes[index].title=title;



    res.status(200).json({
        message: "note updated successfully..."
    })

});


module.exports=app;
