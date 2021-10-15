$(document).on('click', '.pkm-list-btn', function() {
	$(".teamassembler-table tbody").html("");
	//$(".pkm-list-btn").attr("disabled", true)

	var pkms = $(".pkm-list").val();
	pkms = pkms.split(',');

	totalPkms = pkms.length

	var teams = [];

	$.each(pkms, function(k1,v1){
		$.each(pkms, function(k2,v2){
			$.each(pkms, function(k3,v3){
				if (v1 != v2 && v2 != v3 && v1 != v3){
					team = [v1,v2,v3];
					team.sort();
					team = team.join(',');
					teams.push(team);
				}
			});
		});
	});

	teams = [...new Set(teams)];

	var textToAppend = '',
		teamCounter = 0;

	$.each(teams, function(mk,v) {
		pkms = v.split(",");
		var slot1 = pkms[0],
			slot2 = pkms[1],
			slot3 = pkms[2],
			resistances = 0,
			vulnerabilities = 0,
			combinedVulnerabilites = [],
			skip = false;

		$.each(pkms, function(k,v) {
			doubleVulnerability = $.map(pokeDB[v].defense_data.vulnerable_to, function(element,index) {
				return element;
			});

			if ((doubleVulnerability.indexOf("256%") > -1) && $("#hide_dv").is(":checked")) {
				skip = true;
				return false;
			}

			/*if (Object.keys(pokeDB[v].defense_data.resistant_to).length < 5) {
				skip = true;
				return false;
			}*/

			resistances += Object.keys(pokeDB[v].defense_data.resistant_to).length;
			vulnerabilities += Object.keys(pokeDB[v].defense_data.vulnerable_to).length;
			vulnerableToTypes = $.map(pokeDB[v].defense_data.vulnerable_to, function(element,index) {
				return index;
			});

			$.each(vulnerableToTypes, function(k,v) {
				combinedVulnerabilites.push(v);
			})
		});

		if (skip) {
			return true;
		}

		var ctVulnerability = ((new Set(combinedVulnerabilites).size) == combinedVulnerabilites.length);

		if ($("#hide_ctv").is(":checked") && !ctVulnerability) {
			return true;
		}

		teamCounter++;

		var ctVulnerabilityIcon = (ctVulnerability) ? "glyphicon glyphicon-thumbs-up" : "glyphicon glyphicon-thumbs-down";

		textToAppend += "<tr><th><button class=\"btn btn-sm\" id=\"paste_pkms\"><span class=\"glyphicon glyphicon-paste\" aria-hidden=\"true\"></button></th><td id=\"slot1\"><b>"+slot1+"</b><br><small>"+pokeDB[slot1].type.join("/")+"</small></td><td id=\"slot2\"><b>"+slot2+"</b><br><small>"+pokeDB[slot2].type.join("/")+"</small></td><td id=\"slot3\"><b>"+slot3+"</b><br><small>"+pokeDB[slot3].type.join("/")+"</small></td><td>"+resistances+"</td><td>"+vulnerabilities+"</td><td><span class=\""+ctVulnerabilityIcon+"\" aria-hidden=\"true\"></span></tr>";
		
	});

	var description = "<b>Number of pokemons:</b> " + totalPkms + "<br><b>Possible teams:</b> " + teamCounter + "<br>";

	$("#assembler_result").html(description);
	$("#assembler-tbody").append(textToAppend);
	//$(".pkm-list-btn").attr("disabled", false);
});

$(document).on('click', '#paste_pkms', function() {
	//var pkm = $("#paste_pkms").parent().parent().find("td#slot1").text()
	//console.log(pkm)
});