/* 
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email
e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

var app = new Vue(
    {
        el: "#container",
        data: {
            arrEmails: [],
            email: ""
        },
        mounted: function(){
            const self = this;
            
            for(i = 0; i < 10; i++){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(result){
                    self.email = result.data.response;
                    console.log(self.email);

                    self.arrEmails.push(self.email)
                });
            }
            console.log(self.arrEmails); 
        }
    }
)