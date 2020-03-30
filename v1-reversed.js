;
var randomID = '',
    e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) randomID += e.charAt(Math.floor(Math.random() * e.length));
var setTimeoutDelay = 0;
window['' + randomID + ''] = (function() {
    var eid = ' ad_box', // Unused.
        __u1 = 1, // Unused.

        // Colors for the blockadblock prompt.
        overlayColor = '#EEEEEE',
        textColor = '#777777',
        buttonBackgroundColor = '#adb8ff',
        buttonColor = '#FFFFFF',

        __u2 = '', // Unused.

        // Text to display when the blockadblock prompt is shown.
        welcomeText = 'Sorry for the interruption...',
        primaryText = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        subtextText = 'But without advertising-income, we can\'t keep making this site awesome.',
        buttonText = 'I understand, I have disabled my ad blocker.  Let me in!',

        // If 1, adblock was detected.
        adblockDetected = 0,
        // If 1, BlockAdBlock will only nag the visitor once, rather than block access.
        nagMode = 0,

        // The blockadblock domain, reversed.
        bab_domain = 'moc.kcolbdakcolb';

    // Generate a random string of length len.
    function randomStr(len) {
        var str = '',
            alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        len = len || 30;
        for (var i = 0; i < len; i++) {
            str += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
        return str
    };

    return {
        /* Entry point. 
           Creates bait, then waits and checks
           if the adblocker "fell for" the bait, by hiding it. */
        bab: function(check, passed_eid) {
            if (typeof document.body == 'undefined') {
                return
            };
            
            var delay = '0.1', 
                passed_eid = passed_eid ? passed_eid : 'banner_ad',
                bait = document.createElement('DIV');
                
            bait.id = passed_eid;
            bait.style.position = 'absolute';
            bait.style.left = '-999px';
            bait.appendChild(document.createTextNode(' '));
            document.body.appendChild(bait);
            
            // Have we triggered the adblocker?
            setTimeout(function() {
                if (bait) {
                    check((bait.clientHeight == 0), delay);
                    check((bait.clientWidth == 0), delay);
                    check((bait.display == 'hidden'), delay);
                    check((bait.visibility == 'none'), delay);
                    check((bait.opacity == 0), delay);
                    check((bait.left < 1000), delay);
                    check((bait.top < 1000), delay)
                } else {
                    check(true, delay)
                }
            }, 125)
        },

        /* Checks if the passed predicate is true, and if so, 
           creates the popup window. */
        check: function(checkPredicate, unused) {
            if ((checkPredicate) && (adblockDetected == 0)) {
                // The standard bait case: ads are blocked.
                adblockDetected = 1;
                window['' + randomID + ''].arm()
            } else {}
        },

        /* Creates the blocker overlay, and cleans up. */
        arm: function() {
            /* Nag mode: if BAB triggers once, set a session storage item to avoid 
               BAB from firing again. This is for site owners who just want to nag the user,
               rather than block them from their site entirely. */
            if (nagMode == 1) {
                var babNag = sessionStorage.getItem('babn');
                if (babNag > 0) {
                    return true
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };

            // Create the BAB overlay.
            var width = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                height = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight,
                overlay = document.createElement('DIV'),
                overlayID = randomStr();
            overlay.id = overlayID;
            overlay.style.position = 'fixed';
            overlay.style.left = '0';
            overlay.style.top = '0';
            overlay.style.width = width + 'px';
            overlay.style.height = height + 'px';
            overlay.style.backgroundColor = overlayColor;
            overlay.style.zIndex = '9999';
            document.body.appendChild(overlay);
            
            var babSvg = '<a href="http://blockadblock.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            babSvg = babSvg.replace('FILLVECTID1', randomStr());
            babSvg = babSvg.replace('FILLVECTID2', randomStr());

            // Create the blockadblock image, with a link.
            var babLink = document.createElement('DIV');
            babLink.innerHTML = babSvg;
            babLink.style.position = 'absolute';
            babLink.style.bottom = '30px';
            babLink.style.left = '30px';
            babLink.style.width = '160px';
            babLink.style.height = '40px';
            babLink.style.zIndex = '10000';
            babLink.style.opacity = '.6';
            babLink.style.cursor = 'pointer';
            babLink.addEventListener('click', function() {
                // De-obfuscate the blockadblock domain name.
                bab_domain = bab_domain.split('').reverse().join('');
                window.location.href = '//' + bab_domain
            });
            document.getElementById(overlayID).appendChild(babLink);

            document.body.style.visibility = 'hidden';
            overlay.style.visibility = 'visible';

            // Create the blockadblock text.
            var text = document.createElement('DIV'),
                textID = randomStr();
            text.id = textID;
            text.style.position = 'fixed';
            text.style.top = height / 7 + 'px';
            text.style.minWidth = width - 120 + 'px';
            text.style.minHeight = height / 3.5 + 'px';
            text.style.backgroundColor = '#fff';
            text.style.zIndex = '10000';
            text.style.fontFamily = 'Arial Black, Helvetica, Verdana, sans-serif';
            text.style.fontSize = '16pt';
            text.style.textAlign = 'center';
            text.style.padding = '12px';
            text.style.display = 'block';
            text.style.marginLeft = '60px';
            text.style.marginRight = '60px';
            text.style.borderRadius = '15px';
            document.body.appendChild(text);
            text.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            text.style.visibility = 'visible';
            text.innerHTML = 
            '<h3 style="color:#999;font-size:30pt;color:' 
            + textColor
            + ';font-family:sans-serif;font-weight:200;">' 
            + welcomeText
            + '</h3><h1 style="font-size:22pt;font-weight:500;color:' 
            + textColor
            + '">' 
            + primaryText
            + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;"><p style="font-family:sans-serif;font-weight:300;font-size:18pt;color:' 
            + textColor
            + ';">' 
            + subtextText
            + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' 
            + randomStr() 
            + '" style="cursor:pointer;font-size: 18pt;font-family:sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' 
            + buttonBackgroundColor
            + ';color:' 
            + buttonColor
            + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;" onclick="window.location.reload();">' 
            + buttonText
            + '</div></p>'
        }
    }
})();
setTimeout(window['' + randomID + ''].bab(window['' + randomID + ''].check, window['' + randomID + ''].bab_elementid), setTimeoutDelay * 1000);