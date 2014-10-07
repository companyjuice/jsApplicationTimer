/**
 * Object:  jsApplicationTimer
 * Version: master
 * Author:  Edouard Kombo
 * Twitter: @EdouardKombo
 * Github:  Edouard Kombo
 * Url:     https://github.com/edouardkombo/jsApplicationTimer
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Javascript application timer helps you reset your application at specific time if no action on a salector has been done by user.
 */

var jsApplicationTimer = function(){};

jsApplicationTimer.prototype = {
    timer: 120,        //Timer in seconds,
    selector: 'body',
    rafTimer: '',
    substituteTimer: '',
    timeOutFunction: '',
    callBackMethod: '',
    stopAnimation: true,
    debug: true,

    /**
     * Start the counter
     * 
     * @returns {undefined}
     */
    start: function() {
        //Start the counter only if stopAnimation parameter equals true
        if (this.stopAnimation !== false) {
            this.substituteTimer    = this.timer; //Keep the real timer value safe
            this.stopAnimation      = false;
            this.rafTimer           = requestAnimationFrame(this.animation.bind(this));
        }
    },
    
    /**
     * What happens when we click on selector
     * Stop animation and restart it
     * 
     * @returns {undefined}
     */
    clickOnSelector: function (){
        if (false === this.stopAnimation) {
            this.stop();
            this.start();
        }
    },
    
    /**
     * Counter animation logic
     * 
     * @returns {undefined}
     */
    animation: function(){
        
        this.timeOutFunction = setTimeout(function(){
            this.substituteTimer--;

            //If selector is clicked, we stop and restart automatically the counter
            var mySelector          = document.body;
            mySelector.addEventListener('click', this.clickOnSelector.bind(this), false);

            //If time elapsed, stop timer and execute callback method
            if ((this.substituteTimer <= 0) || this.stopAnimation) {
                
                this.substituteTimer = 0;
                
                //If we volontary stop animation, don't callback a function
                if (false === this.stopAnimation) {
                    this.stop();
                    this.callback();
                }
                
            } else {
                this.rafTimer   = requestAnimationFrame(this.animation.bind(this));
            }

            //Show debug in console
            if (this.debug) {
                console.log('Time: ' + this.substituteTimer);
            }
            
        }.bind(this), 1000); 
    },
    
    /**
     * Reset animation and vars
     * 
     * @returns {undefined}
     */
    stop: function(){
        this.stopAnimation      = true;
        this.substituteTimer    = this.timer;  
        clearTimeout(this.timeOutFunction);        
        cancelAnimationFrame(this.rafTimer);
    },
    
    /**
     * Function to execute after animation end
     * 
     * @returns {undefined}
     */
    callback: function(){
        if (this.callBackMethod !== '') {
            this.callBackMethod();
        }         
    }
};