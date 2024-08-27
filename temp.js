document.addEventListener('DOMContentLoaded',function()
{
  document.querySelector('.middle-section').addEventListener('click', function(event)
{
  if(event.target.classList.contains('seat'))
  {
    const seat=event.target;
    let currentValue=seat.innerHTML;
    
    if(seat.classList.contains('seat-clicked'))
    {
      seat.innerHTML=currentValue;
      seat.classList.remove('seat-clicked');
    }
    else 
    {
      seat.classList.add('seat-clicked');
    }
  }
})
})

function getDistination()
{
  
  let fromBox = document.querySelector('#from');
  const findex = fromBox.options[fromBox.selectedIndex];
  const fromValue=findex.value;


 let toBox = document.querySelector('#to');
 const tindex = toBox.options[toBox.selectedIndex];
 const toValue=tindex.value;

 let dateTag = document.querySelector('#date');
 let date=dateTag.value;
 

 return [fromValue , toValue,date];
}

function getBuses()
{
    let values=getDistination();
    let fromValue=values[0];
    let toValue=values[1];
    let date=values[2];


    let getTextDiv=document.querySelector('.middle-section');

  
    if(!fromValue || !toValue || !date)
      {
        getTextDiv.innerHTML='<div class="same-Distination-error">Please insert all details</div>';
        alert('Please insert all details');
        return;
      }

   if(fromValue ===  toValue)
   {
     getTextDiv.innerHTML='<div class="same-Distination-error">Buses not Found</div>';
     alert('Buses not Found');
     return;
   }

   
  

   //object + property + array + objects
   const busDetails = {
    'Rajkot to Ahemadabad':[
      {
        travelName: 'Mahasagar Travels',
        type: 'NON A/C Sleeper (2+1)',
        departureTime: '12:30am',
        departurePlace: 'Moti Taki Chowk',
        duration: '04h 30m',
        arrivalTime: '05:00am',
        arrivalPlace: 'Paldi',
        fare: 473,
        rating: 4.00,
        ratingImage: 'images/rating.png'
      },
      {
        travelName: 'Vrundavan Travels',
        type: 'A/C Seater (2+1)',
        departureTime: '2:30am',
        departurePlace: 'Green Land Chokdi',
        duration: '04h 00m',
        arrivalTime: '06:30am',
        arrivalPlace: 'Sarkhej',
        fare: 400,
        rating: 3.5,
        ratingImage: 'images/star3.jpg'
      },

      {
        travelName: 'Ramnath Travels',
        type: 'A/C Sleeper (2+1)',
        departureTime: '3:30am',
        departurePlace: 'Madhapar Chokdi',
        duration: '04h 15m',
        arrivalTime: '07:15am',
        arrivalPlace: 'Iskon',
        fare: 520,
        rating: 3.00,
        ratingImage: 'images/star3.jpg'
      }

    ],
    'Ahemadabad to Rajkot':[
      {
        travelName: 'Raj Ratan Travels',
        type: 'Bharat Benz A/C Sleeper (2+1)',
        departureTime: '12:00am',
        departurePlace: 'Paldi',
        duration: '04h 30m',
        arrivalTime: '04:30am',
        arrivalPlace: 'Green Land Chokdi',
        fare: 349,
        rating: 4.5,
        ratingImage: 'images/rating.png'
      },
      {
        travelName: 'AIRBUS EXPRESS',
        type: 'Urbania A/C Sleeper (2+1)',
        departureTime: '3:00am',
        departurePlace: 'Iskon',
        duration: '04h 30m',
        arrivalTime: '07:30am',
        arrivalPlace: 'Green Land Chokdi',
        fare: 472,
        rating: 3.0,
        ratingImage: 'images/star3.jpg'
      },
      {
        travelName: 'Rajwadi Travels',
        type: 'A/C Sleeper (2+1)',
        departureTime: '1:00am',
        departurePlace: 'Naroda',
        duration: '04h 35m',
        arrivalTime: '05:35am',
        arrivalPlace: 'Green Land Chokdi',
        fare: 520,
        rating: 3.00,
        ratingImage: 'images/star3.jpg'
      }
    ],
    'Rajkot to Surat':[
      {
        travelName: 'Pavan Travels',
        type: 'A/C Sleeper (2+1)',
        departureTime: '10:00pm',
        departurePlace: 'Green Land Chokdi',
        duration: '10h 30m',
        arrivalTime: '08:30am',
        arrivalPlace: 'Vadla Parking Katargam',
        fare: 468,
        rating: 4.00,
        ratingImage: 'images/rating.png'

      },
      {
        travelName: 'Jay Khodiyar Travels',
        type: 'A/C Sleeper (2+1)',
        departureTime: '12:00pm',
        departurePlace: 'Goverdhan Chowk',
        duration: '10h 00m',
        arrivalTime: '10:00am',
        arrivalPlace: 'Mata Wadi',
        fare: 499,
        rating: 3.5,
        ratingImage: 'images/star3.jpg'


      },
      {
        travelName: 'Raghav Travels',
        type: 'A/C Seater',
        departureTime: '2:00am',
        departurePlace: 'Om nagar',
        duration: '10h 05m',
        arrivalTime: '12:05pm',
        arrivalPlace: 'Kamrej',
        fare: 499,
        rating: 3.0,
        ratingImage: 'images/star3.jpg'

      }
    ],
    'Surat to Rajkot':[
      {
        travelName: 'New Pramukhraj Travels',
        type: 'NON A/C Sleeper(2+1)',
        departureTime: '11:00pm',
        departurePlace: 'Nana Varachha Dhal',
        duration: '9h 35m',
        arrivalTime: '8:35am',
        arrivalPlace: 'Shapar',
        fare: 459,
        rating: 4.0,
        ratingImage: 'images/rating.png'
 
      },
      {
        travelName: 'Pavan Travels',
        type: 'A/C Sleeper(2+1)',
        departureTime: '1:00am',
        departurePlace: 'Katargram',
        duration: '10h 30m',
        arrivalTime: '10:30am',
        arrivalPlace: 'Kalawad Road',
        fare: 400,
        rating: 3.0,
        ratingImage: 'images/star3.jpg'
 

      }
      ,
      
        {
          travelName: 'Bharat Travels',
          type: 'NON A/C Sleeper(2+1)',
          departureTime: '3:00am',
          departurePlace: 'Sarthana Jakat Naka',
          duration: '9h 30m',
          arrivalTime: '12:30pm',
          arrivalPlace: 'Green Land Chokdi',
          fare: 420,
          rating: 3.0,
          ratingImage: 'images/star3.jpg'
   
  
        }

      
    ],
    'Ahemadabad to Surat':[
      {
        travelName: 'Kabra Express Logistics',
        type: 'A/C Sleeper(2+1)',
        departureTime: '11:00pm',
        departurePlace: 'Paldi',
        duration: '06h 20m',
        arrivalTime: '7:20am',
        arrivalPlace: 'Varachha',
        fare: 520,
        rating: 4.5,
        ratingImage: 'images/rating.png'

      },
      {
        travelName: 'Paras Express',
        type: 'A/C Sleeper(2+1)',
        departureTime: '12:20am',
        departurePlace: 'Paldi',
        duration: '06h 00m',
        arrivalTime: '6:20am',
        arrivalPlace: 'Railway Station',
        fare: 550,
        rating: 3.5,
        ratingImage: 'images/star3.jpg'

      },
      {
        travelName: 'Ghanshyan Travels',
        type: 'Bharat Benz A/C Sleeper(2+1)',
        departureTime: '3:00am',
        departurePlace: 'Paldi',
        duration: '05h 30m',
        arrivalTime: '8:30am',
        arrivalPlace: 'Shyam Dham Mandir',
        fare: 620,
        rating: 2.5,
        ratingImage: 'images/star3.jpg'

      }
    ],
    'Surat to Ahemadabad':[
      {
        travelName: 'Ghanshyan Travels',
        type: 'Bharat Benz A/C Sleeper(2+1)',
        departureTime: '10:00pm',
        departurePlace: 'Kamrej',
        duration: '06h 30m',
        arrivalTime: '4:30am',
        arrivalPlace: 'Iskon',
        fare: 420,
        rating: 4.00,
        ratingImage: 'images/rating.png'

      },
      {
        travelName: 'Kabra Express Logistics',
        type: 'A/C Sleeper(2+1)',
        departureTime: '4:00am',
        departurePlace: 'Railway Station',
        duration: '06h 00m',
        arrivalTime: '10:00am',
        arrivalPlace: 'Paldi',
        fare: 620,
        rating: 3.5,
        ratingImage: 'images/star3.jpg'

      },
      {
        travelName: 'Paras Express',
        type: 'A/C Sleeper(2+1)',
        departureTime: '1:20am',
        departurePlace: 'Kamrej',
        duration: '05h 30m',
        arrivalTime: '6:50am',
        arrivalPlace: 'Paldi',
        fare: 450,
        rating: 3.0,
        ratingImage: 'images/star3.jpg'


      }
    ]
    
   };

 
  function generateBusDetailsHTML(buses)
  {
    
    return buses.map((bus, index) => `
      
    <div class="bus-details">
        <div>
          <div class="rating-section">
              <img class="rating-image" src="${bus.ratingImage}">
              <div>${bus.rating}</div>
          </div>
           <div class="TravelName">${bus.travelName}</div> 
           <div>${bus.type}</div>
        
        </div>
        <div>
            <div>${bus.departureTime}</div>
            <div>${bus.departurePlace}</div>
        </div>
        <div class="total-time">
        ${bus.duration}
        </div>
        <div>
            <div>${bus.arrivalTime}</div>
            <div>${bus.arrivalPlace}</div>
        </div>
        <div class="price"> 
            INR ${bus.fare}
           
          
            <button class="view-seat-button"  data-index="${index}" onclick="seatSelector()"  >VIEW SEATS</button>
        </div>        
   </div>
   <div class="dropdown-div">
   <div class="dropdown" id="dropdown-${index}" style="display:none;">
  
   </div>
   </div>

  

      `).join('');
      

  }

  if(busDetails[`${fromValue} to ${toValue}`])
  {
    getTextDiv.innerHTML =`<div class="route-details">
   ${fromValue} &#8594; ${toValue} Buses
    </div>
    <div class="date-details">${date}</div>

     <div class="title">
        <div>Travel Name</div>
        <div>|</div>
        <div>Departure</div>
        <div>|</div>
        <div>Time</div>
        <div>|</div>
        <div>Arrival</div>
        <div>|</div>
        <div>Fare</div>
       </div>
  
  
    ${generateBusDetailsHTML(busDetails[`${fromValue} to ${toValue}`])}
    
    
    
  `;
  }

  document.querySelectorAll('.view-seat-button').forEach(button => {
    button.addEventListener('click', function () {
      var index = this.getAttribute('data-index');
      const dropdown = document.querySelector(`#dropdown-${index}`);
      const fare = busDetails[`${fromValue} to ${toValue}`][index].fare;
      const travelname = busDetails[`${fromValue} to ${toValue}`][index].fare;

      

      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
        this.textContent = 'HIDE SEATS';
        dropdown.innerHTML = generateSeatHTML(fare);

      } else {
        dropdown.style.display = 'none';
        this.textContent = 'VIEW SEATS';
        dropdown.innerHTML = '';
      }
    });
  });
}
 
function generateSeatHTML(fare) {
  return `
  <div class="seat-selector">
                    <div class="left-section">
                        <img class="steering-image" src="images/image-removebg-preview.png">
                    </div>
                    <div class="right-section">
                        <div class="upper-row">
                            <div class="seat">
                            1
                            </div>
                            <div class="seat">2</div>
                            <div class="seat" >3</div>
                            <div class="seat" >4</div>
                            <div class="seat" >5</div>
                            <div class="seat" >6</div>
                        </div>
                        <div class="middle-row">
                            <div class="seat" >7</div>
                            <div class="seat" >8</div>
                            <div class="seat" >9</div>
                            <div class="seat" >10</div>
                            <div class="seat" >11</div>
                            <div class="seat" >12</div>
                        </div>
                    </div>
                </div>
                    <div class="dropdown-totalprice">Total Price:INR ${fare}</div>
                    <div class="proceed-section">
                    <button class="proceed-button"><a href="bus-ticket.html" target="_blank" class="proceed-link">PROCEED TO BOOK</a></button>
                    </div>
                  
                       
            </div>
  `;

  
}






document.querySelector('.submit-search').addEventListener('click',function(){
   window.scrollBy({
    top:500,
    behavior:'smooth'

});
});