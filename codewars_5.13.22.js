        // CHESS PIECE
var r1 = [      ['b-bishop',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
        [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
        [' ',' ',' ',' ','w-pawn',' ',' ',' '],
        [' ',' ',' ',' ',' ','w-bishop',' ',' '],
        ['w-king',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ','b-pawn','b-pawn',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' ']];
        
var r2 =        [
        [' ', ' ', ' ', ' ', ' ',' ' ,' ' ,' ' ],
        [' ', ' ',' ' , ' ',' ' ,'w-king', ' ','b-queen'],
        [ ' ',' ' ,' ', ' ',' ' ,' ' ,'b-knight','w-knight'],
        [  'w-queen', ' ','b-rook',' ' , ' ','b-king',' ' ,' ' ],
        [ ' ' ,'w-pawn','b-knight', ' ', ' ', ' ',' ' ,' ' ],
        [ ' ' , ' ', ' ','w-pawn','b-rook', ' ', ' ',' ' ],
        [ ' ',' ' , ' ',' ' ,' ' , ' ', ' ', ' '],
        [ ' ' , ' ',' ' ,'w-pawn', ' ', ' ',' ' , ' ']
        ]

const hash = Object.freeze({
        queen: 9, 
        rook: 5, 
        bishop: 3, 
        knight: 3, 
        pawn: 1
        })

function piecesValue(arr, s) {
        return arr.reduce((a,b)=> a.concat(b)).filter(a=>a.startsWith(s[0]+'-')).length? 
                arr.reduce((a,b)=> a.concat(b)).filter(a=>a.startsWith(s[0]+'-')).map(a=>hash[a.slice(2)]||0).reduce((a,b)=>a+b): 0  
}