
        // PLAYING WITH CUBES
        function Cube(n) {
                var side = Math.abs(n);
                        
                this.getSide = function() {
                        return side || 0
                        
                };
                this.setSide = function(n) {
                        if ( !n ) {
                                side = 0
                        } else {
                                side = Math.abs(n)
                        }
                        
                };
        };