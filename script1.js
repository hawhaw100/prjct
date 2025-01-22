const reviewform =document.getElementById('reviewform');
const reviewlist =document.getElementById('reviewsList');
const reviewbutton =document.getElementById('reviewbutton');

reviewform.addEventListener('submit',function(event){
   event.preventDefault();

    const name =document.getElementById('name').value.trim();
    const rating =document.getElementById('rating').value.trim();
    const review =document.getElementById('review').value.trim();

    console.log(name)
    console.log(rating)
    console.log(review)

 const reviewItem= document.createElement('li');
 reviewItem.innerHTML=`<strong>${name} </strong>
  (Rating: ${rating}/5) <br> ${review}`;
reviewlist.appendChild(reviewItem);
reviewform.reset();
})

reviewbutton.addEventListener('click', function(){
reviewform.reset();
reviewlist.innerHTML ='';
})

