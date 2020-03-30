;
var xcJQCflAmpis = '',
    KkUCuxqIgh = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) xcJQCflAmpis += KkUCuxqIgh.charAt(Math.floor(Math.random() * KkUCuxqIgh.length));
var VABjXzYzJp = 8,
    WSpSwDLzQd = 91,
    nsJjjBITZC = 178,
    neMuFFBFgq = 19,
    rMwHazIJjv = function(t) {
        var o = !1,
            i = function() {
                if (document.addEventListener) {
                    document.removeEventListener('DOMContentLoaded', e);
                    window.removeEventListener('load', e)
                } else {
                    document.detachEvent('onreadystatechange', e);
                    window.detachEvent('onload', e)
                }
            },
            e = function() {
                if (!o && (document.addEventListener || event.type === 'load' || document.readyState === 'complete')) {
                    o = !0;
                    i();
                    t()
                }
            };
        if (document.readyState === 'complete') {
            t()
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', e);
            window.addEventListener('load', e)
        } else {
            document.attachEvent('onreadystatechange', e);
            window.attachEvent('onload', e);
            var n = !1;
            try {
                n = window.frameElement == null && document.documentElement
            } catch (r) {};
            if (n && n.doScroll) {
                (function a() {
                    if (o) return;
                    try {
                        n.doScroll('left')
                    } catch (e) {
                        return setTimeout(a, 50)
                    };
                    o = !0;
                    i();
                    t()
                })()
            }
        }
    };
window['' + xcJQCflAmpis + ''] = (function() {
    var t = {
        t$: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function(e) {
            var d = '',
                l, r, i, s, c, a, n, o = 0;
            e = t.n$(e);
            while (o < e.length) {
                l = e.charCodeAt(o++);
                r = e.charCodeAt(o++);
                i = e.charCodeAt(o++);
                s = l >> 2;
                c = (l & 3) << 4 | r >> 4;
                a = (r & 15) << 2 | i >> 6;
                n = i & 63;
                if (isNaN(r)) {
                    a = n = 64
                } else if (isNaN(i)) {
                    n = 64
                };
                d = d + this.t$.charAt(s) + this.t$.charAt(c) + this.t$.charAt(a) + this.t$.charAt(n)
            };
            return d
        },
        decode: function(e) {
            var n = '',
                l, c, d, s, r, i, a, o = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (o < e.length) {
                s = this.t$.indexOf(e.charAt(o++));
                r = this.t$.indexOf(e.charAt(o++));
                i = this.t$.indexOf(e.charAt(o++));
                a = this.t$.indexOf(e.charAt(o++));
                l = s << 2 | r >> 4;
                c = (r & 15) << 4 | i >> 2;
                d = (i & 3) << 6 | a;
                n = n + String.fromCharCode(l);
                if (i != 64) {
                    n = n + String.fromCharCode(c)
                };
                if (a != 64) {
                    n = n + String.fromCharCode(d)
                }
            };
            n = t.e$(n);
            return n
        },
        n$: function(t) {
            t = t.replace(/;/g, ';');
            var n = '';
            for (var o = 0; o < t.length; o++) {
                var e = t.charCodeAt(o);
                if (e < 128) {
                    n += String.fromCharCode(e)
                } else if (e > 127 && e < 2048) {
                    n += String.fromCharCode(e >> 6 | 192);
                    n += String.fromCharCode(e & 63 | 128)
                } else {
                    n += String.fromCharCode(e >> 12 | 224);
                    n += String.fromCharCode(e >> 6 & 63 | 128);
                    n += String.fromCharCode(e & 63 | 128)
                }
            };
            return n
        },
        e$: function(t) {
            var o = '',
                e = 0,
                n = c1 = c2 = 0;
            while (e < t.length) {
                n = t.charCodeAt(e);
                if (n < 128) {
                    o += String.fromCharCode(n);
                    e++
                } else if (n > 191 && n < 224) {
                    c2 = t.charCodeAt(e + 1);
                    o += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    e += 2
                } else {
                    c2 = t.charCodeAt(e + 1);
                    c3 = t.charCodeAt(e + 2);
                    o += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    e += 3
                }
            };
            return o
        }
    };
    var a = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'YWRfY2hhbm5lbA==', 'YWRzZXJ2ZXI=', 'YmFubmVyaWQ=', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms='],
        y = Math.floor(Math.random() * a.length),
        Y = t.decode(a[y]),
        b = Y,
        C = 1,
        f = '#EEEEEE',
        r = '#777777',
        g = '#adb8ff',
        w = '#FFFFFF',
        Q = '',
        W = 'Welcome!',
        v = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        p = 'But without advertising-income, we can\'t keep making this site awesome.',
        s = 'I understand, I have disabled my ad blocker.  Let me in!',
        o = 0,
        u = 0,
        n = 'moc.kcolbdakcolb',
        l = 0,
        M = e() + '.jpg';

    function h(t) {
        if (t) t = t.substr(t.length - 15);
        var n = document.getElementsByTagName('script');
        for (var o = n.length; o--;) {
            var e = String(n[o].src);
            if (e) e = e.substr(e.length - 15);
            if (e === t) return !0
        };
        return !1
    };

    function m(t) {
        if (t) t = t.substr(t.length - 15);
        var e = document.styleSheets;
        x = 0;
        while (x < e.length) {
            thisurl = e[x].href;
            if (thisurl) thisurl = thisurl.substr(thisurl.length - 15);
            if (thisurl === t) return !0;
            x++
        };
        return !1
    };

    function e(t) {
        var o = '',
            e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        t = t || 30;
        for (var n = 0; n < t; n++) o += e.charAt(Math.floor(Math.random() * e.length));
        return o
    };

    function i(o) {
        var i = ['YWRuLmViYXkuY29t', 'YWQubWFpbC5ydQ==', 'anVpY3lhZHMuY29t', 'YWQuZm94bmV0d29ya3MuY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t', 'YS5saXZlc3BvcnRtZWRpYS5ldQ==', 'YWdvZGEubmV0L2Jhbm5lcnM=', 'YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==', 'Y2FzLmNsaWNrYWJpbGl0eS5jb20=', 'cHJvbW90ZS5wYWlyLmNvbQ==', 'YWRzLnlhaG9vLmNvbQ==', 'YWRzLnp5bmdhLmNvbQ==', 'YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t', 'YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t', 'YXMuaW5ib3guY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t'],
            r = ['ZmF2aWNvbi5pY28=', 'YmFubmVyLmpwZw==', 'NDY4eDYwLmpwZw==', 'NzIweDkwLmpwZw==', 'c2t5c2NyYXBlci5qcGc=', 'MTM2N19hZC1jbGllbnRJRDI0NjQuanBn', 'YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=', 'Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=', 'ZmF2aWNvbi5pY28=', 'YWQtbGFyZ2UucG5n', 'c3F1YXJlLWFkLnBuZw==', 'ZmF2aWNvbjEuaWNv', 'YmFubmVyX2FkLmdpZg==', 'bGFyZ2VfYmFubmVyLmdpZg==', 'd2lkZV9za3lzY3JhcGVyLmpwZw==', 'YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];
        x = 0;
        spimg = [];
        while (x < o) {
            c = i[Math.floor(Math.random() * i.length)];
            d = r[Math.floor(Math.random() * r.length)];
            c = t.decode(c);
            d = t.decode(d);
            var a = Math.floor(Math.random() * 2) + 1;
            if (a == 1) {
                n = '//' + c + '/' + d
            } else {
                n = '//' + c + '/' + e(Math.floor(Math.random() * 20) + 4) + '.jpg'
            };
            spimg[x] = new Image();
            spimg[x].onerror = function() {
                var t = 1;
                while (t < 7) {
                    t++
                }
            };
            spimg[x].src = n;
            x++
        }
    };

    function A(t) {};
    return {
        ekgBSgaBPk: function(t, r) {
            if (typeof document.body == 'undefined') {
                return
            };
            var o = '0.1',
                r = b,
                e = document.createElement('DIV');
            e.id = r;
            e.style.position = 'absolute';
            e.style.left = '-5000px';
            e.style.top = '-5000px';
            e.style.height = '60px';
            e.style.width = '468px';
            var d = document.body.childNodes,
                a = Math.floor(d.length / 2);
            if (a > 15) {
                var n = document.createElement('div');
                n.style.position = 'absolute';
                n.style.height = '0px';
                n.style.width = '0px';
                n.style.top = '-5000px';
                n.style.left = '-5000px';
                document.body.insertBefore(n, document.body.childNodes[a]);
                n.appendChild(e);
                var i = document.createElement('DIV');
                i.id = 'banner_ad';
                i.style.position = 'absolute';
                i.style.left = '-5000px';
                i.style.top = '-5000px';
                document.body.appendChild(i)
            } else {
                e.id = 'banner_ad';
                document.body.appendChild(e)
            };
            l = setInterval(function() {
                if (e) {
                    t((e.clientHeight == 0), o);
                    t((e.clientWidth == 0), o);
                    t((e.display == 'hidden'), o);
                    t((e.visibility == 'none'), o);
                    t((e.opacity == 0), o)
                } else {
                    t(!0, o)
                }
            }, 1000)
        },
        bPqodbIKMt: function(e, m) {
            if ((e) && (o == 0)) {
                o = 1;
                window['' + xcJQCflAmpis + ''].NhnwYPCjqO();
                window['' + xcJQCflAmpis + ''].bPqodbIKMt = function() {
                    return
                }
            } else {
                var p = t.decode('aW5zLmFkc2J5Z29vZ2xl'),
                    c = document.querySelector(p);
                if ((c) && (o == 0)) {
                    if ((WSpSwDLzQd % 3) == 0) {
                        var d = 'Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
                        d = t.decode(d);
                        if (h(d)) {
                            if (c.innerHTML.replace(/\s/g, '').length == 0) {
                                o = 1;
                                window['' + xcJQCflAmpis + ''].NhnwYPCjqO()
                            }
                        }
                    }
                };
                var f = !1;
                if (o == 0) {
                    if ((nsJjjBITZC % 3) == 0) {
                        if (!window['' + xcJQCflAmpis + ''].ranAlready) {
                            var l = ['Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==', 'Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==', 'Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=', 'Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=', 'Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28='],
                                s = l.length,
                                r = l[Math.floor(Math.random() * s)],
                                n = r;
                            while (r == n) {
                                n = l[Math.floor(Math.random() * s)]
                            };
                            r = t.decode(r);
                            n = t.decode(n);
                            i(Math.floor(Math.random() * 2) + 1);
                            var a = new Image(),
                                u = new Image();
                            a.onerror = function() {
                                i(Math.floor(Math.random() * 2) + 1);
                                u.src = n;
                                i(Math.floor(Math.random() * 2) + 1)
                            };
                            u.onerror = function() {
                                o = 1;
                                i(Math.floor(Math.random() * 3) + 1);
                                window['' + xcJQCflAmpis + ''].NhnwYPCjqO()
                            };
                            a.src = r;
                            if ((neMuFFBFgq % 3) == 0) {
                                a.onload = function() {
                                    if ((a.width < 8) && (a.width > 0)) {
                                        window['' + xcJQCflAmpis + ''].NhnwYPCjqO()
                                    }
                                }
                            };
                            i(Math.floor(Math.random() * 3) + 1);
                            window['' + xcJQCflAmpis + ''].ranAlready = !0
                        };
                        window['' + xcJQCflAmpis + ''].bPqodbIKMt = function() {
                            return
                        }
                    }
                }
            }
        },
        NhnwYPCjqO: function() {
            if (u == 1) {
                var C = sessionStorage.getItem('babn');
                if (C > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            var c = 'Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
            c = t.decode(c);
            if (!m(c)) {
                var h = document.createElement('link');
                h.setAttribute('rel', 'stylesheet');
                h.setAttribute('type', 'text/css');
                h.setAttribute('href', c);
                document.getElementsByTagName('head')[0].appendChild(h)
            };
            clearInterval(l);
            document.body.innerHTML = '';
            document.body.style.cssText += 'margin:0px !important';
            document.body.style.cssText += 'padding:0px !important';
            var Q = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                y = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                a = document.createElement('DIV'),
                b = e();
            a.id = b;
            a.style.position = 'fixed';
            a.style.left = '0';
            a.style.top = '0';
            a.style.width = Q + 'px';
            a.style.height = y + 'px';
            a.style.backgroundColor = f;
            a.style.zIndex = '9999';
            document.body.appendChild(a);
            var d = '<a href="http://blockadblock.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            d = d.replace('FILLVECTID1', e());
            d = d.replace('FILLVECTID2', e());
            var i = document.createElement('DIV');
            i.innerHTML = d;
            i.style.position = 'absolute';
            i.style.bottom = '30px';
            i.style.left = '30px';
            i.style.width = '160px';
            i.style.height = '40px';
            i.style.zIndex = '10000';
            i.style.opacity = '.6';
            i.style.cursor = 'pointer';
            i.addEventListener('click', function() {
                n = n.split('').reverse().join('');
                window.location.href = '//' + n
            });
            document.getElementById(b).appendChild(i);
            var o = document.createElement('DIV'),
                Z = e();
            o.id = Z;
            o.style.position = 'fixed';
            o.style.top = y / 7 + 'px';
            o.style.minWidth = Q - 120 + 'px';
            o.style.minHeight = y / 3.5 + 'px';
            o.style.backgroundColor = '#fff';
            o.style.zIndex = '10000';
            o.style.cssText += 'font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
            o.style.cssText += 'line-height: normal !important';
            o.style.cssText += 'font-size: 16pt !important';
            o.style.cssText += 'text-align: center !important';
            o.style.cssText += 'padding: 12px !important';
            o.style.display += 'block';
            o.style.marginLeft = '30px';
            o.style.marginRight = '30px';
            o.style.borderRadius = '15px';
            document.body.appendChild(o);
            o.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            o.style.visibility = 'visible';
            var Y = 30,
                A = 22,
                x = 18,
                M = 18;
            if ((window.innerWidth < 640) || (screen.width < 640)) {
                o.style.zoom = '50%';
                o.style.cssText += 'font-size: 18pt !important';
                o.style.marginLeft = '45px;';
                i.style.zoom = '65%';
                var Y = 22,
                    A = 18,
                    x = 12,
                    M = 12
            };
            o.innerHTML = '<h3 style="color:#999;font-size:' + Y + 'pt;color:' + r + ';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;text-align:center;">' + W + '</h3><h1 style="font-size:' + A + 'pt;font-weight:500;font-family:Helvetica, geneva, sans-serif;color:' + r + ';margin-top:10px;margin-bottom:10px;text-align:center;">' + v + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;text-align:center;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:' + x + 'pt;color:' + r + ';text-align:center;">' + p + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + e() + '" style="cursor:pointer;font-size:' + M + 'pt;font-family:Helvetica, geneva, sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + g + ';color:' + w + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">' + s + '</div></p>'
        }
    }
})();
window.cfVDoTdmsN = function(t, e) {
    var r = Date.now,
        i = window.requestAnimationFrame,
        a = r(),
        n, o = function() {
            r() - a < e ? n || i(o) : t()
        };
    i(o);
    return {
        clear: function() {
            n = 1
        }
    }
};
var BGWRSzJxTu;
if (document.body) {
    document.body.style.visibility = 'visible'
};
rMwHazIJjv(function() {
    if (document.getElementById('babasbmsgx')) {
        document.getElementById('babasbmsgx').style.visibility = 'hidden';
        document.getElementById('babasbmsgx').style.display = 'none'
    };
    BGWRSzJxTu = window.cfVDoTdmsN(function() {
        window['' + xcJQCflAmpis + ''].ekgBSgaBPk(window['' + xcJQCflAmpis + ''].bPqodbIKMt, window['' + xcJQCflAmpis + ''].nipmDSFuLH)
    }, VABjXzYzJp * 1000)
});