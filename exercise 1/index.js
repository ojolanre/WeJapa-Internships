// Question 1

const  jazzify = (arrayOfStrings) => {
	if (arrayOfStrings.length > 0) {
		let modifiedArray = arrayOfStrings.map((value) => {
		  if (value.endsWith("7")) {
		    return value;
		  } else {
		    return `${value}7`;
		  }
		});		
		return modifiedArray;
	} else {
		return arrayOfStrings;
	}
}



console.log(jazzify([]));
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));

// Question 2
const marathonDistance = (arr) => {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (Math.sign(arr[i]) < 0) {
			total += Math.abs([arr[i]]);
		} else {
			total += arr[i];
		}
	}
	return total === 25;	
}

console.log(marathonDistance([1, 2, 3, 4]));
console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([-6, 15, 4]));

// Question 3
const arrayOfMultiples = (a, b) => {
	let multiArr = [];
	for (let i = 1; i <= b; i++) {
		multiArr.push(a*i);		
	}
	console.log(a, b);
	return multiArr;
}


// Question 4	

const todaysDate = () => {
	const d = new Date();
	const day = d.toLocaleString('default', { weekday: 'long' });
	const month = d.toLocaleString('default', { month: 'long' });
	const year = d.getFullYear();
	return `Day:${day}, Month:${month}, Year:${year}`
}
console.log(todaysDate());


//Question 7

const comparePoints = (a, b) => {
	let score1 = 0;
	let score2 = 0;
	a.forEach((value, index) => {
		if (b[index] > value) {
			score2 += 1;
		} else if (b[index] < value) {
			score1 += 1;
		} 
	})
	return [score1, score2];
}
console.log(comparePoints([1, 2, 3], [3, 2, 1]));