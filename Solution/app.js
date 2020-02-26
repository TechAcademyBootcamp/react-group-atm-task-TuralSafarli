$( document ).ready(function() {
    $.ajax({
        url:'enter_card2.html',
        success: function(page){
         $('.box').html(page);
        }
    })
});


$(document).on('click', '.button', function(e){
    e.preventDefault();
    $.ajax({
        url:'check_card.html',
        success: function(page){
            $('.box').html(page);
            
        }
    
    });
});

$(document).on('submit', '.myform', function(e){
    e.preventDefault();
    // var card_number = $('input:eq(0)').val();
    // var password = $('input:eq(1)').val();
    // alert(card_number + password);
    var postData = {
        "cart_number": $('input:eq(0)').val(),
        "password": $('input:eq(1)').val()
    }
    
    localStorage.setItem('kart',postData.cart_number);
    localStorage.setItem('sifre',postData.password);
    

    $.ajax({
        url: 'http://34.70.181.209/check/',
        method: "POST",
        data: postData,
        success: function(result){
            
         $.ajax({
             url:"user_balance.html",
             success: function(page){
                $('.box').html(page);
                $('#name').append(result.full_name);
                $('#balance').append(result.balance);
                
            }
         });

            console.log(result);
        },
    })

});


$(document).on('submit', '.button2', function(e){
    e.preventDefault();
    // var card_number = $('input:eq(0)').val();
    // var password = $('input:eq(1)').val();
    // alert(card_number + password);
    var postData = {
        "cash": $('#cashout').val(),
        "cart_number": localStorage.getItem('kart'),
        "password": localStorage.getItem('sifre'),
        
    }

    $.ajax({
        url: 'http://34.70.181.209/cash-out/',
        method: "POST",
        data: postData,
        success: function(result){
            
         $.ajax({
             url:"Cash_out.html",
             success:function(page){
                 $('.box').html(page);
                 $('#name').append(result.full_name);
                $('#current_balance').append(result.balance);
                $('#withdraw').append(postData.cash);
             }
         })

            console.log(result);
        },
    })

});



$(document).on('click', '#again',  function(e){
    e.preventDefault();
    $.ajax({
        url:'enter_card.html',
        success: function(page){
            $('.box').html(page);
            
        }
    
    });
});