

$("add_list").submit(function(event){
    alert("inserted successfully");
})


if(window.location.pathname=="/")
{
    $ondelete = $(".table tbody td a.del");
    $ondelete.click(function()
    {
        var id = $(this).attr("data-id")

        var request ={
            "url":`http://localhost:3000/api/list/${id}`,
            "method":"DELETE"
        }

        if(confirm("Want to Delete?")){
            $.ajax(request).done(function(response){
                alert("Deleted Successfully!");
                location.reload();
            })
        }

    })
}