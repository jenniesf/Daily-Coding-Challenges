        // ASPECT RATIO CROPPING - PART 1
function aspectRatio(x,y){  
       return [   Math.ceil ( y * (16/9) )  ,   y   ]
}
console.log( aspectRatio(  640, 480 ) )  