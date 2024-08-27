function addhabit()
{
  const textbox=document.querySelector('#habit-writer');
  const inputHabit=textbox.value.trim();
  console.log(inputHabit);

  // Don't proceed if input is empty
  if(inputHabit === '') return;

  //create a new list item for the habit
  const unlist=document.querySelector('.all-habits');
  const listItem=document.createElement('li');
  listItem.innerHTML =`${inputHabit} <button onclick="removehabit(this)">Remove</button>`;
  unlist.appendChild(listItem);
  //save updated habits to localstorage
  saveData();

  //clear the textbox
  textbox.value='';

}
//function to remove a habit
function removehabit(button)
{
 const listItem=button.parentElement;
 listItem.remove();
 //save updated habits to localstorage
 saveData();
  
}
//function to add or update streak information
function dayCountAdd()
{
  const dayCount=document.querySelector('#day-count');
  const day=dayCount.value.trim();
  
  if(day === '') return;

  const currentDate=new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;

    const streakDiv=document.querySelector('.streak-row');
    streakDiv.innerHTML = `<p class="streak-paragraph"><img class="streak-logo" src="abcd.png"> ${day} (${formattedDate})</p>`;

    saveData();
}
 
function saveData()
{
  const habits=Array.from(document.querySelectorAll('.all-habits li')).map(item => item.innerHTML.split('<button')[0].trim());
  const streakInfo=document.querySelector('.streak-row').innerHTML;

  localStorage.setItem('habits',JSON.stringify(habits));
  localStorage.setItem('streak',streakInfo);
}
function loadData()
{
  const savedHabits=JSON.parse(localStorage.getItem('habits')) || [];
  const savedStreak=localStorage.getItem('streak') || '';

  const unlist = document.querySelector('.all-habits');
  savedHabits.forEach(habit =>{
    const listItem=document.createElement('li');
    listItem.innerHTML=`${habit} <button onclick="removehabit(this)">remove</button>`;
    unlist.appendChild(listItem);
  }
  );

  const streakDiv=document.querySelector('.streak-row');
  streakDiv.innerHTML=savedStreak;
}

document.addEventListener('DOMContentLoaded',loadData);