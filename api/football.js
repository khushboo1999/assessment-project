function f1()
{
    $.get('https://www.scorebat.com/video-api/v1/',function(data){
        console.log(data);
        f2(data);
    })
}
function f2(res)
{
    document.getElementById('loading').style.display='none';
    for(var i = 0;i<res.length;i++)
    {
        $('#football').append(
            `<div class='col-10'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${res[i].title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Video</h6>
                        ${res[i].embed}
                        <a href="${res[i].url}"><button class="btn btn-success">Live Score</button></a>
                    </div>
                </div>
            </div>`
            )
    }
}