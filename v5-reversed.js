;
var randomID = '',
    e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) randomID += e.charAt(Math.floor(Math.random() * e.length));
var setTimeoutDelay = 0;
// These two variables enable or disable specific detection codepaths,
// if the variable is 'yes' or 'no' exactly.
    aDefOne = 'no',
    aDefTwo = 'no';
window['' + randomID + ''] = (function() {
    /* List of common ad class names.
       One is picked at random from this list. */
    var baitIDs = [
    "ad-left",
    "adBannerWrap",
    "ad-frame",
    "ad-header",
    "ad-img",
    "ad-inner",
    "ad-label",
    "ad-lb",
    "ad-footer",
    "ad-container",
    "ad-container-1",
    "ad-container-2",
    "Ad300x145",
    "Ad300x250",
    "Ad728x90",
    "AdArea",
    "AdFrame1",
    "AdFrame2",
    "AdFrame3",
    "AdFrame4",
    "AdLayer1",
    "AdLayer2",
    "Ads_google_01",
    "Ads_google_02",
    "Ads_google_03",
    "Ads_google_04",
    "DivAd",
    "DivAd1",
    "DivAd2",
    "DivAd3",
    "DivAdA",
    "DivAdB",
    "DivAdC",
    "AdImage",
    "AdDiv",
    "AdBox160",
    "AdContainer",
    "glinkswrapper",
    "adTeaser",
    "banner_ad",
    "adBanner",
    "adbanner",
    "adAd",
    "bannerad",
    " ad_box",
    "ad_channel",
    "adserver",
    "bannerid",
    "adslot",
    "popupad",
    "adsense",
    "google_ad",
    "outbrain-paid",
    "sponsored_link"
    ], 
        // A random bait ID taken from the above list. Used in various places to avoid static blocking.
        randomBaitID = baitIDs[ Math.floor(Math.random() * baitIDs.length) ],

        __u1 = 1, // Unused.

        // Colors for the blockadblock prompt.
        overlayColor = '#EEEEEE',
        textColor = '#777777',
        buttonBackgroundColor = '#adb8ff',
        buttonColor = '#FFFFFF',

        __u2 = '', // Unused.

        // Text to display when the blockadblock prompt is shown.
        welcomeText = 'Welcome!',
        primaryText = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        subtextText = 'But without advertising-income, we can\'t keep making this site awesome.',
        buttonText = 'I understand, I have disabled my ad blocker.  Let me in!',

        // If 1, adblock was detected.
        adblockDetected = 0,
        // If 1, BlockAdBlock will only nag the visitor once, rather than block access.
        nagMode = 0,

        // The blockadblock domain, reversed.
        bab_domain = 'moc.kcolbdakcolb',

        /* A setInterval that checks for adblock presence.
           Set up in bab().
           Global so that check() can tear it down later. */
        checkCallback = 0,

        // Random image name.
        randomImage = randomStr() + '.jpg';

    // Check if a given script exists in the document.
    function scriptExists(href) {
        if (href) href = href.substr(href.length - 15);
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            var src = String(scripts[i].src);
            if (src) src = src.substr(src.length - 15);
            if (src === href) return true
        };
        return false
    };

    // Checks if a given stylesheet exists in the document.
    function stylesheetExists(href) {
        if (href) href = href.substr(href.length - 15);
        var styleSheets = document.styleSheets;
        i = 0;
        while (i < styleSheets.length) {
            thisurl = styleSheets[i].href;
            if (thisurl) thisurl = thisurl.substr(thisurl.length - 15);
            if (thisurl === e) return true;
            i++
        };
        return false
    };

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

    /* Creates n "bait" images, storing them in the global array
       spimg. Some ad blockers will then block them automatically.
    */
    function baitImages(n) {
        var url_array = [
            "adn.ebay.com",
            "ad.mail.ru",
            "juicyads.com",
            "ad.foxnetworks.com",
            "partnerads.ysm.yahoo.com",
            "a.livesportmedia.eu",
            "agoda.net/banners",
            "advertising.aol.com",
            "cas.clickability.com",
            "promote.pair.com",
            "ads.yahoo.com",
            "ads.zynga.com",
            "adsatt.abcnews.starwave.com",
            "adsatt.espn.starwave.com",
            "as.inbox.com",
            "partnerads.ysm.yahoo.com"
          ],
            ad_img_array = [
                "favicon.ico",
                "banner.jpg",
                "468x60.jpg",
                "720x90.jpg",
                "skyscraper.jpg",
                "1367_ad-clientID2464.jpg",
                "adclient-002147-host1-banner-ad.jpg",
                "CDN-334-109-137x-ad-banner",
                "favicon.ico",
                "ad-large.png",
                "square-ad.png",
                "favicon1.ico",
                "banner_ad.gif",
                "large_banner.gif",
                "wide_skyscraper.jpg",
                "advertisement-34323.jpg"
              ];
        spimg = []; // Note the use of global scope.
        i = 0;
        while (i < n) {
            domain_url = url_array[Math.floor(Math.random() * url_array.length)];
            ad_img_url = ad_img_array[Math.floor(Math.random() * ad_img_array.length)];
            var r = Math.floor(Math.random() * 2) + 1;
            if (r == 1) {
                bait_image = '//' + domain_url + '/' + ad_img_url
            } else {
                random_url = randomStr(Math.floor(Math.random() * 20) + 4)
                bait_image = '//' + domain_url + '/' + random_url + '.jpg'
            };
            spimg[i] = new Image();
            spimg[i].src = bait_image;
            i++
        }
    };

    function consolelog(e) {
        // "Dev mode" check: developpers of BAB must set window.consolelog to 1.
        if (window.consolelog == 1) {
            console.log(e)
        }
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
                bait = document.createElement('DIV');

            bait.id = randomBaitID;
            bait.style.position = 'absolute';
            bait.style.left = '-5000px';
            bait.style.top = '-5000px';
            bait.style.height = '60px';
            bait.style.width = '468px';

            var d = document.body.childNodes,
                mid = Math.floor(d.length / 2);

            // Is the document long enough?
            if (mid > 15) {
                // Create a floating container.
                var floatingContainer = document.createElement('div');
                floatingContainer.style.position = 'absolute';
                floatingContainer.style.height = '0px';
                floatingContainer.style.width = '0px';
                floatingContainer.style.top = '-5000px';
                floatingContainer.style.left = '-5000px';

                // Insert the bait in the floating container.
                document.body.insertBefore(floatingContainer, document.body.childNodes[mid]);
                floatingContainer.appendChild(bait);

                // Finally, create a bottom "banner ad" bait.
                var bannerBait = document.createElement('DIV');
                bannerBait.id = 'banner_ad';
                bannerBait.style.position = 'absolute';
                bannerBait.style.left = '-5000px';
                bannerBait.style.top = '-5000px';
                document.body.appendChild(bannerBait)
            } else {
                // Place the bait directly.
                bait.id = 'banner_ad';
                document.body.appendChild(bait)
            };

            /* Check every second if we have triggered the adblocker.
               Try again until we do.
               This will loop infinitely: check() will teardown this once called. */
            checkCallback = setInterval(function() {
                if (bait) {
                    check((bait.clientHeight == 0), delay);
                    check((bait.clientWidth == 0), delay);
                    check((bait.display == 'hidden'), delay);
                    check((bait.visibility == 'none'), delay);
                    check((bait.opacity == 0), delay)
                } else {
                    check(true, delay)
                }
            }, 1000)
        },

        /* Checks if the passed predicate is true, and if so, 
           creates the popup window. */
        check: function(checkPredicate, unused) {
            /* Note that the adblockDetected variable is checked very often. This is to avoid a race condition:
               1: this function triggers from checkCallback.
               2: arm() is called, but the whole process took more than one second.
               3: this function is called again from checkCallback, before arm() has an opportunity to clearInterval().
               
               This may explain the redundant style of checking adblockDetected at each turn, to be able to avoid
               race conditions no matter where in the codepath the second call to check() is.
             */

            if ((checkPredicate) && (adblockDetected == 0)) {
                // The standard bait case: ads are blocked.
                adblockDetected = 1;
                baitImages(Math.floor(Math.random() * 3) + 3);
                window['' + randomID + ''].arm();
                window['' + randomID + ''].check = function() { // Clean up.
                    return
                }
            } else {
                var q = 'ins.adsbygoogle',
                    // Selects all Google ads in the document: 
                    // all ins elements with class 'adsbygoogle'.
                    adsbygoogleQuery = document.querySelector(q);

                if ((adsbygoogleQuery) && (adblockDetected == 0)) {
                    // Ads are not blocked, since the bait ad is still there,
                    // and adblockDetected hasn't been set
                    if (aDefOne == 'yes') {
                        var adsbygoogle = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\u0000';
                        if (scriptExists(adsbygoogle)) {
                            // Adsense pre-exists.
                            if (adsbygoogleQuery.innerHTML.replace(/\s/g, '').length == 0) {
                                // The ad's content was cleared, so ads are blocked.
                                baitImages(Math.floor(Math.random() * 3) + 3); // ??
                                window['' + randomID + ''].arm()
                            }
                        }
                    };
                    adblockDetected = 1
                } else {
                    var __u = false; // Unused.
                    if (adblockDetected == 0) {
                        if (aDefTwo == 'yes') {
                            if (! window['' + randomID + ''].ranAlready) {
                                /* Heuristic based blocking.
                                   Try to add a bunch of bait images to the document.
                                   If we succeed, there is an adblocker.
                                   This method has a false positive, so it is disabled. */
                                var favicons = [
                                    "//www.google.com/adsense/start/images/favicon.ico",
                                    "//www.gstatic.com/adx/doubleclick.ico",
                                    "//advertising.yahoo.com/favicon.ico",
                                    "//ads.twitter.com/favicon.ico",
                                    "//www.doubleclickbygoogle.com/favicon.ico"
                                  ],
                                    len = favicons.length,
                                    img = favicons[Math.floor(Math.random() * len)],
                                    imgCopy = img;
                                while (img == imgCopy) {
                                    imgCopy = favicons[Math.floor(Math.random() * len)]
                                };
                                baitImages(Math.floor(Math.random() * 2) + 1);
                                var m = new Image(),
                                    c = new Image();
                                m.onerror = function() {
                                    baitImages(Math.floor(Math.random() * 2) + 1);
                                    c.src = imgCopy;
                                    baitImages(Math.floor(Math.random() * 2) + 1)
                                };
                                c.onerror = function() {
                                    adblockDetected = 1;
                                    baitImages(Math.floor(Math.random() * 3) + 1);
                                    window['' + randomID + ''].arm()
                                };
                                m.src = img;
                                baitImages(Math.floor(Math.random() * 3) + 1);
                                window['' + randomID + ''].ranAlready = true
                            };
                            window['' + randomID + ''].check = function() {
                                return
                            }
                        }
                    }
                }
            }
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

            // Include cssreset.css, unless it is already included in the document.
            var cssresetHref = '//yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css';
            if (!stylesheetExists(cssresetHref)) {
                var cssReset = document.createElement('link');
                cssReset.setAttribute('rel', 'stylesheet');
                cssReset.setAttribute('type', 'text/css');
                cssReset.setAttribute('href', cssresetHref);
                document.getElementsByTagName('head')[0].appendChild(cssReset)
            };

            // Stop the scheduled checks, since we triggered the adblocker. 
            clearInterval(checkCallback);

            // Clear the entire document, to avoid simply blocking the BAB div and get access to content.
            document.body.innerHTML = '';
            
            document.body.style.cssText += 'margin:0px !important';
            document.body.style.cssText += 'padding:0px !important';

            // Create the BAB overlay.
            var width = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
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
            text.style.cssText += 'font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
            text.style.cssText += 'line-height: normal !important';
            text.style.cssText += 'font-size: 16pt !important';
            text.style.cssText += 'text-align: center !important';
            text.style.cssText += 'padding: 12px !important';
            text.style.display += 'block';
            text.style.marginLeft = '60px';
            text.style.marginRight = '60px';
            text.style.borderRadius = '15px';
            document.body.appendChild(text);
            text.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            text.style.visibility = 'visible';
            var welcomeFontSize = 30,
                primaryFontSize = 22,
                subtextFontSize = 18,
                buttonTextFontSize = 18;
            if ((window.innerWidth < 640) || (screen.width < 640)) {
                text.style.zoom = '50%';
                text.style.cssText += 'font-size: 18pt !important';
                text.style.marginLeft = '45px;';
                babLink.style.zoom = '65%';
                var welcomeFontSize = 36,
                    primaryFontSize = 27,
                    subtextFontSize = 22,
                    buttonTextFontSize = 22
            };
            text.innerHTML = 
            '<h3 style="color:#999;font-size:' 
            + welcomeFontSize 
            + 'pt;color:' 
            + textColor
            + ';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;text-align:center;">' 
            + welcomeText
            + '</h3><h1 style="font-size:' 
            + primaryFontSize 
            + 'pt;font-weight:500;font-family:Helvetica, geneva, sans-serif;color:' 
            + textColor
            + ';margin-top:10px;margin-bottom:10px;text-align:center;">' 
            + primaryText
            + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;text-align:center;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:' 
            + subtextFontSize 
            + 'pt;color:' 
            + textColor 
            + ';text-align:center;">' 
            + subtextText
            + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' 
            + randomStr() 
            + '" style="cursor:pointer;font-size:' 
            + buttonTextFontSize 
            + 'pt;font-family:Helvetica, geneva, sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' 
            + buttonBackgroundColor
            + ';color:' 
            + buttonColor
            + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">' 
            + buttonText
            + '</div></p>'
        }
    }
})();
if (document.body) {
    document.body.style.visibility = 'visible'
};
// If this script is run again, hide the blockadblock message.
if (document.getElementById('babasbmsgx')) {
    document.getElementById('babasbmsgx').style.visibility = 'hidden';
    document.getElementById('babasbmsgx').style.display = 'none'
};
setTimeout(window['' + randomID + ''].bab(window['' + randomID + ''].check, window['' + randomID + ''].bab_elementid), setTimeoutDelay * 1000);