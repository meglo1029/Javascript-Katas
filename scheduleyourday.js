// The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an an array of time alloted to work, broken up with time alloted with breaks:

// Input 1: Hours - Number of hours available to you to get your work done! 
// Input 2: Tasks - How many tasks you have to do througout the day
// Input 3: Duration (minutes)- How long each of your tasks will take to complete

// Criteria to bear in mind:

// Your schedule should start with work and end with work.
// It should also be in minutes, rounded to the nearest whole minute.
// If your work is going to take more time than you have, return "You're not sleeping tonight!"


function dayPlan (hours, tasks, duration){
 var schedule = [];
  var numBreaks = tasks - 1;
  var breakLength = Math.round((hours * 60 - tasks * duration) / numBreaks);
  if (tasks * duration > hours * 60) {
    schedule = "You're not sleeping tonight!"
  } else {
    for (var i = 1; i <= tasks; i++){
    schedule.push(duration, breakLength)
    }
    schedule.pop();
  }
  return schedule;
}