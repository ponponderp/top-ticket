pragma solidity ^0.4.0;

contract topticket{

    address owner;
    uint public ticket;
    uint constant price = 0.5 ether;
    mapping (address => uint) public purchasers;

    function ticketOrder(){
        owner = msg.sender;
        ticket = 100;
    }
    
    function getBalance() view public returns(uint) {
         return address(this).balance;
    }
    
    function() payable{
        buyTicket;
    }
    
   

    function buyTicket(uint amount) payable{
        if (msg.value != (amount * price) || amount > ticket){
            throw;
        }

        purchasers[msg.sender] += amount;
        ticket -= amount;

    }
}
