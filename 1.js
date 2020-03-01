function return_biodata(){
	let biodata = {
		"name"       : "Muhammad Elfanza",
		"age"        : 17,
		"address"    : "Taktakan, Serang - Banten 42162",
		"hobbies"    : ['Programming', 'Design', 'Writing'],
		"is_married" : false,
		"list_school": [
			{
				"name"     : "SMP Islam Al-Azhar 11 Kota Serang",
				"year_in"  : "2014",
				"year_out" : "2017",
				"major"    : null
			},
			{
				"name"	   : "SMA Negeri 3 Kota Serang",
				"year_in"  : "2017",
				"year_out" : "2020",
				"major"	   : "IPA"
			}
		],
		"skills" : [
			{
				"skill_name" : "Web Development",
				"level"      : "Beginner"
			},
			{
				"skill_name" : "Graphic Designer",
				"level"      : "Beginner"
			}
		],
		"interest_in_coding" : true
	}
	return biodata;
}

// Untuk menjalankan program: console.log(return_biodata())
