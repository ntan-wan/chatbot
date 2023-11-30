
# Assessment 2

**Question 1**  
What is the value that will be returned in the console log below?

```
function cal(a,b) {
	a+b
}  
console.log(cal(1,2))
```

*Answer: The console.log(cal(1,2)) will output undefined to the console. To fix this, should add 'return'keyword*

**Question 2**  
Write a js/jquery function to convert variable x into “Goal” object structure.
```
let x = [
	{
		id: 1,
		type: “a”
	},
	{
		id: 2,
		type: “b”
	},
	{
		id: 3,
		type: “b”
	},
	{
		id: 4,
		type: “c”
	},
	{
		id: 5,
		type: “a”
	},
] 


Goal: {
	a : [{id: 1,type:a},{id: 5,type:a}],
	b : [{id: 2,type:b},{id: 3,type:b}],
	c : [{id: 4,type:c}]
}
```

*Answer:*  
```
function convertToGoalStructure(arr) {  
  const goal = {};

  arr.forEach(item => {
    if (!goal[item.type]) {
      goal[item.type] = [];
    }

    goal[item.type].push({ id: item.id, type: item.type });  
  });

  return goal;
}
```
**Question 3**  
Explain the difference between flex and grid display from CSS. (Explain with your own words)  

*Answer: Flexbox is uses for one-dimensional layouts, and Grid is for two-dimensional layouts.*


