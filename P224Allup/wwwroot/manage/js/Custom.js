$(document).ready(function () {
    $(document).on("click", "#deleteTag", function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let url = $(this).attr("href");
                fetch(url).then(response =>
                {
                    if (response.ok) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }

                    return response.text();
                }).then(data =>
                {
                    $(".tagTable").html(data);
                })
            }
        })

    })

    $(document).on("click", "#restoreTag", function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Restore it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let url = $(this).attr("href");
                fetch(url).then(response => {
                    if (response.ok) {
                        Swal.fire(
                            'Restored!',
                            'Your file has been Restored.',
                            'success'
                        )
                    }

                    return response.text();
                }).then(data => {
                    $(".tagTable").html(data);
                })
            }
        })

    })

    $("#IsMain").prop("checked", false);
    $(document).on("click", "#IsMain", function () {
        if ($(this).prop("checked")) {
            $(".categoryParentInput").addClass("d-none")
            $(".categoryFileInput").removeClass("d-none")
        } else {
            $(".categoryParentInput").removeClass("d-none")
            $(".categoryFileInput").addClass("d-none")
        }
    })
})