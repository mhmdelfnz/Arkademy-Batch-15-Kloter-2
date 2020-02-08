function countVowels(str){
  	vcount = 0;
  	for(i = 0; i < str.length; i++){
		if(str.charAt(i).match(/[aiueoAIUEO]/)){
    		vcount++
    	}
    }
  	return vcount;
}

// console.log(countVowels("Programmer")); Hasil = 3
// console.log(countVowels("hmm..")); Hasil = 0