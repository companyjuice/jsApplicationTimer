Js Application Timer
====================

Javascript application timer helps you reset your application at specific time if no action on a salector has been done by user.
This application has been built in native Javascript


1) How to install
-----------------

    bower install js-application-timer


2) How to use it?
-----------------

    //Instantiate the object
    var applicationTimer = new jsApplicationTimer();

    //Set parameters
    applicationTimer.callBackMethod = stopTimer;
    applicationTimer.timer  = 5; //Time in seconds
    applicationTimer.start();

    //Callback method
    function stopTimer() {
        alert('Hello world!');
    }

        
3) Live Demonstration
---------------------

http://edouardkombo.github.io/jsApplicationTimer/demo/
    

Contributing
-------------

If you do contribute, please make sure it conforms to the PSR coding standard. The easiest way to contribute is to work on a checkout of the repository, or your own fork, rather than an installed version.

Want to learn more? Visit my blog http://creativcoders.wordpress.com


Issues
------

Bug reports and feature requests can be submitted on the [Github issues tracker](https://github.com/edouardkombo/jsApplicationTimer/issues).

For further informations, contact me directly at edouard.kombo@gmail.com.
