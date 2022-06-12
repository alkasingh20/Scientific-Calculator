$(document).ready(function(){
    //equal btn
    $('#btn-equal').on('click',function(){
        var equation = $('#screen').val();
        var result = math.evaluate(equation);

        $('#screen_result').val(result);
    })
    //clear btn
    $('#btn-clear').on('click',function(){
        $('#screen').val('0');
    });

})

function showVal(val){
    var oldVal= $('#screen').val();
    var newVal = "";

    if(oldVal == "0")
    {
        newVal=val;
    }else{
        newVal = oldVal + val;
    }
    $('#screen').val(newVal);
}
