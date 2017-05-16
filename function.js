function rand(pMin, pMax, pInteger) {
	if(pInteger)
		return Math.floor(((Math.random() * (pMax-pMin+1)) + pMin));		
	else
    		return ((Math.random() * (pMax-pMin)) + pMin);
}

//same but better way to do
const rand2 = (pMin, pMax, pInteger) => (pInteger)?Math.floor(((Math.random() * (pMax-pMin+1)) + pMin)):((Math.random() * (pMax-pMin)) + pMin);
