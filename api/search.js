function f1()
{
	var x = document.getElementById('1').value;
	fetch(`https://newsapi.org/v2/everything?q=${x}&from=2019-10-21&sortBy=publishedAt&apiKey=ed689e0d8281404f86fc2ec8743c05fc`)
	.then(res=>res.json())
	.then(res=>{
		console.log(res);
		f2(res);
	})
}
function f2(res)
{
	if(res.articles.length == 0)
	{
		alert('No Article Found');
	}
	else
	{
		document.getElementById('news').innerHTML="";
		for(var i=0;i<res.articles.length;i++)
    	{
	        $('#news').append(
	        `<div class='col-3 mb-5 ml-4 mr-4'>
	            <div class="card " style="width: 18rem;height:25rem">
	                <img src=${res.articles[i].urlToImage} class="card-img-top">
	                    <div class="card-body">
	                        <p class="card-text">${res.articles[i].title}</p>
	                        <a href=${res.articles[i].url} class="btn btn-primary">Read</a>
	                    </div>
	                </div>
	            </div>
	        </div>`
	        )
    
		}
	}
}