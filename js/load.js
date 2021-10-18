function forceChange(input) {

	loadDataInput = input.split("&")

	dataToLoad = []

	for (loadData in loadDataInput) {
		loadData = loadDataInput[loadData].split(",")
		dataToLoad.push(loadData)
	}

	for (data in dataToLoad) {
		slot = dataToLoad[data][0]
		pkm = dataToLoad[data][1]
		quick = dataToLoad[data][2]
		charge1 = dataToLoad[data][3]
		charge2 = dataToLoad[data][4]

		if (pkm == undefined) {
			return
		}

		pkmData = pokeDB[pkm]
		
		if (pkmData == undefined) {
			return
		}

		$("#pokemonList_slot" + slot).val(pkmData.id + " - " + pkmData.name)
		$("#pokemonList_slot" + slot).trigger("change")

		if (quick != undefined && quick.match(/[a-z]/i)) {
			for (move of pkmData.moveset.quick) {
				if (move === quick) {
					var formattedMoveName = move + " (EPT " + quickMoveDB[move.replace('*', '')].ept + "/DPT " + quickMoveDB[move.replace('*', '')].dpt + ")";

					$("#quick_move-slot" + slot).val(formattedMoveName)
					$("#quick_move-slot" + slot).trigger("change")
				}
			}
		}

		if (charge1 != undefined && charge1.match(/[a-z]/i)) {
			for (move of pkmData.moveset.charge) {
				if (move === charge1) {
					var formattedMoveName = move + " (ENG " + chargeMoveDB[move.replace('*', '')].energy + "/DPE " + chargeMoveDB[move.replace('*', '')].dpe + ")";

					$("#charge1_move-slot" + slot).val(formattedMoveName)
					$("#charge1_move-slot" + slot).trigger("change")
				}
			}
		}

		if (charge2 != undefined && charge2.match(/[a-z]/i)) {
			for (move of pkmData.moveset.charge) {
				if (move === charge2) {
					var formattedMoveName = move + " (ENG " + chargeMoveDB[move.replace('*', '')].energy + "/DPE " + chargeMoveDB[move.replace('*', '')].dpe + ")";

					$("#charge2_move-slot" + slot).val(formattedMoveName)
					$("#charge2_move-slot" + slot).trigger("change")
				}
			}
		}
	}
}
