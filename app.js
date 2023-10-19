alert("This Product is #50,000")
alert("Your Second payment must be made a week time")


const form = document.querySelector(".form")
const clear_btn = document.querySelector(".clear")
const disply = document.querySelector(".right")
const product_amount = 50000
const days = 7


form.addEventListener("submit", function(event){
    event.preventDefault()

    let name = document.querySelector(".name").value
    let phone_number = document.querySelector(".phone-no").value
    let email = document.querySelector(".email").value
    let address = document.querySelector(".address").value
    let date_first = document.querySelector(".date").value
    let amount_paid = document.querySelector(".amount-paid").value

    let balance = product_amount - amount_paid
    let due_date = date_first + days
    

    if(!name || !phone_number || !email || !address || !date_first || !amount_paid){
        alert("All fields are required")
    } else{
        let id_card = `     <div class="id-card"> 
        <img src="shoe1.png" >
        <p class="con">Congratulations, Your Order will be delivered in 2 days </p>
        <br>
        <p>It will be Delivered to ${name} at ${address} </p>
        <br>
    <div class="bal">
        <p>Balance = ${balance}</p>
        <p>Due Date = ${due_date}</p>
    </div>
    <br>
    <div class="share">
        <button>Share</button>
    </div>
    <br>
    <p>Thank You for Shopping with us.</p>
</div>`
            disply.innerHTML = id_card
    }
})


clear_btn.addEventListener("click", function(){
    let name = document.querySelector(".name").value = ""
    let phone_number = document.querySelector(".phone-no").value = ""
    let email = document.querySelector(".email").value = ""
    let address = document.querySelector(".address").value = ""
    let date_first = document.querySelector(".date").value = ""
    let amount_paid = document.querySelector(".amount-paid").value = ""
})