
const readline = require('readline'); 
// const w = () => {

  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  rl.question('What is your name? ', (a1) => {
    rl.question('What activity do you  like? ', (a2) => {
      rl.question('What do you listen to while doing that? ', (a3) => {
        rl.question('What is your favorite meal of the day? ', (a4) => {
          rl.question('What is your favorite thing to eat in that meal ? ', (a5) => {
            rl.question('what is your fave sport ?' , (a6) => {
              rl.question('What is your superpower? describe in few words?', (a7) => {     
                console.log(`${a1} likes to ${a2} while listening to ${a3}. He likes to eat ${a5} for ${a4} and eats that after playing ${a6}. His superpower is ${a7}`);
                rl.close();
              });  
            });
          });
        });
      });
    });
  });

  

  
  
  

  
