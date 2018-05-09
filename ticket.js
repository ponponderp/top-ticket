web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.currentProvider);


abi = JSON.parse('([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"purchasers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"buyTicket","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"ticket","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"ticketOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"}]);';
var topticket = web3.eth.contract(abi);

contractInstance = topticket.at('0x4f51cc7a38624d9a0c7c24f1d322adbcf84607e5');
console.log (contractInstance);

$(document).ready(function() {



  contractInstance.movieTicket().watch(function(error, result){
  	  	if (!error){
  			console.log(result.args.firstname);
  			console.log(result.args.lastname);

  		} else {
  			console.log(error);
          }
  	});
  	$("#button").click(function() {
		contractInstance.setPurchaser('Mike','Rodriguez', {from: web3.eth.accounts[0]}, function() {
  		});
    });

});