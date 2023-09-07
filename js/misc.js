function clearLayout(slot)
{
    $('.resistant_to-' + slot).html('');
    $('.vulnerable_to-' + slot).html('');
    $('.defense_type_row-' + slot).html("<td class='defense_typeA-" + slot + "'>&nbsp;</td>");
    $('#quick_move-' + slot).html("<option>-- Quick --</option>");
    $('#charge1_move-' + slot).html("<option>-- Charge I --</option>");
    $('#charge2_move-' + slot).html("<option>-- Charge II --</option>");
    $('#quick_goodAgainst-' + slot)
        .html("")
        .css('display', 'none');
    $('#quick_weakAgainst-' + slot)
        .html("")
        .css('display', 'none');
    $('#charge1_goodAgainst-' + slot)
        .html("")
        .css('display', 'none');
    $('#charge1_weakAgainst-' + slot)
        .html("")
        .css('display', 'none');
    $('#charge2_goodAgainst-' + slot)
        .html("")
        .css('display', 'none');
    $('#charge2_weakAgainst-' + slot)
        .html("")
        .css('display', 'none');
    $('#quick_move_type-' + slot)
        .html("").css('display', 'none');
    $('#charge1_move_type-' + slot)
        .html("").css('display', 'none');
    $('#charge2_move_type-' + slot)
        .html("").css('display', 'none');
    $('.shadow_' + slot)
        .css('display', 'none');
    if ($('.shadow_' + slot + ' [type="checkbox"]').is(":checked")) {
        $('.shadow_' + slot + ' [type="checkbox"]').prop('checked', false)
    }
}

function disableMove(value, target)
{
    $('#' + target + " option").each(function(){
        if ($(this).val() == value) {
            $(this).attr('disabled', 'disabled')
        } else {
            $(this).removeAttr('disabled')
        }
    });
}
