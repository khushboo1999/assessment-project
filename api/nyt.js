var url = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=71CgA7eDVzO2aHJOdqUF9MFgslNCieZT';
        
function getNews()
{
		fetch(url)
		    .then(function(response) {
		        return response.json();
		    })
		.then(response => {
            f1(response)
        })
		.catch(err => {
			console.log(err);
        });
        
}

function f1(resp)
{
    console.log(resp);
    document.getElementById('loading').style.display='none';
    for(var i=0;i<100;i++)
    {
        if(resp.response.docs[i].multimedia.length != 0 )
        {
            $('#news').append(
            `<div class='col-3 mb-5 ml-4 mr-4'>
                <div class="card " style="width:18rem">
                    <img style="width: 18rem;height:20rem" src='https://www.nytimes.com/${resp.response.docs[i].multimedia[0].url}' class="card-img-top">
                        <div class="card-body">
                        <h5>${resp.response.docs[i].headline.main}</h5>
                            <p class="card-text">${resp.response.docs[i].snippet}</p>
                            <a href='${resp.response.docs[i].web_url}' class="btn btn-primary">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </div>`
            )
        }
    }
}