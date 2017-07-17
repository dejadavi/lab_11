$('document').ready(function(){


   $('#button').on("click", function(){

    $search=$("#search").val();
    console.log($search);
// $searchString="https://www.reddit.com/r/Art/search?q="+$search+"&restrict_sr=on&sort=relevance&t=all/.json";
    $searchString="https://www.reddit.com/r/Art.json"

    $.get($searchString).done(function(response){
       //  console.log(response)

      response.data.children.forEach(function(post){
        
        $title=post.data.title;
        if($title.length>50){$title=$title.substr(0,50)+"....."};

        $imgLink=post.data.preview.images["0"].resolutions["0"].url;
        $img='<img src="'+$imgLink+'">';
        $author=post.data.author;
        
        $("<div>"+"<h3>"+$title+"<h3> <p> By "+$author+"<br></p>"+$img+"</div>").appendTo($("#container")).addClass("box");


      })
    })



   });






});