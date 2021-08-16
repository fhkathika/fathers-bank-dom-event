


// get the deposite amount
document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeInputId=document.getElementById('input-deposite');
   const depositeInput= depositeInputId.value;
   const depositeInputNumber=parseFloat(depositeInput)

//    update deposite total

   const depositeCurrent= document.getElementById('deposite-current');
  const previousDepositeAmountText=depositeCurrent.innerText;
  const previousDepositeAmountNumber=parseFloat(previousDepositeAmountText);
  

  const newDepositeTotal=previousDepositeAmountNumber + depositeInputNumber;
  console.log(newDepositeTotal)
  depositeCurrent.innerText=newDepositeTotal;
  depositeInputId.value=''

//   update current balance
const balanceAmountId= document.getElementById('balance-total')
const previousBalanceTotalText=balanceAmountId.innerText;
const balanceTotalNumber=parseFloat(previousBalanceTotalText) ;
const newBalance=balanceTotalNumber+depositeInputNumber;
balanceAmountId.innerText=newBalance;

})

// widraw amount
document.getElementById('widraw-button').addEventListener('click', function(){
    const inputWidrawId= document.getElementById('input-widraw')
    const inputWidrawText=inputWidrawId.value;
    const inputWidrawNumber=parseFloat(inputWidrawText);

    console.log( inputWidrawNumber)

    // get widraw total
    const widrawTotalId= document.getElementById('widraw-total')
    const WidrawAmountText=widrawTotalId.innerText
    const WidrawAmountNumber=parseFloat(WidrawAmountText)

    const newWidrawAmount=inputWidrawNumber + WidrawAmountNumber
    widrawTotalId.innerText= newWidrawAmount
    // clear widraw input
    inputWidrawId.value='';

    // current balance after widraw

   const balanceAfterWidraw= document.getElementById('balance-total');
   const totalBalanceInText=balanceAfterWidraw.innerText;
   const totalBalanceInNumber=parseFloat(totalBalanceInText);
   const newBalanceAfterWidraw=totalBalanceInNumber-newWidrawAmount
   balanceAfterWidraw.innerText=newBalanceAfterWidraw

    
})