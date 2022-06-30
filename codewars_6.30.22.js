        //Baby shark lyrics generator

        function babySharkLyrics(){
                let names=['Baby','Mommy','Daddy','Grandma','Grandpa','Let\'s go hunt'],
                s='shark',
                d=' doo'.repeat(6),
                v=''
        
                for (let i=0;i<names.length-1;i++){
                        v+=`${names[i]} ${s},${d}\n`.repeat(3)
                        v+=`${names[i]} ${s}!\n`
                }
                v+=`${names[5]}, ${d}\n`.repeat(3)
                v+=`${names[5]}!\nRun away,…`
                return v
        }
        
        console.log( babySharkLyrics())