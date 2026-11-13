/**
 * Front page: offer the visitor's own system first, and keep the two showcase videos in step.
 */
(function () {
  var ua = navigator.userAgent;
  var os = /iPhone|iPad|iPod/.test(ua) ? 'ios'
    : /Android/.test(ua) ? 'android'
      : /Windows/.test(ua) ? 'win'
        : /Macintosh/.test(ua) ? 'mac'
          : /Linux|X11|CrOS/.test(ua) ? 'linux' : 'mac';
  // iPadOS asks for the desktop site and says Macintosh.
  if (os === 'mac' && navigator.maxTouchPoints > 1) {
    os = 'ios';
  }
  var phone = os === 'ios' || os === 'android';

  document.querySelectorAll('.pa-detect').forEach(function (root) {
    root.dataset.os = os;
    root.dataset.pick = root.querySelector('[data-phone="' + os + '"]') ? os : 'other';
    if (!phone) {
      return;
    }
    var cols = root.querySelector('.pa-h-cols');
    var col = root.querySelector('.pa-col-phone');
    if (cols && col) {
      cols.insertBefore(col, cols.firstChild);
    }
  });

  // The page is cached for long, so point the download links at the newest release here.
  var RELEASES = 'https://github.com/pulinairc/pulina-app/releases/download/';
  var LATEST_API = 'https://api.github.com/repos/pulinairc/pulina-app/releases/latest';
  var FILE_ENDINGS = ['_aarch64.dmg', '_x64-setup.exe', '_amd64.AppImage', '_amd64.deb', '-x86_64.pkg.tar.zst', '_android.apk'];
  var CACHE_KEY = 'pulina.latest';

  function pointLinks(assets) {
    document.querySelectorAll('a[href^="' + RELEASES + '"]').forEach(function (a) {
      var ending = FILE_ENDINGS.filter(function (e) { return a.href.slice(-e.length) === e; })[0];
      var asset = ending && assets.filter(function (x) { return x.name.slice(-ending.length) === ending; })[0];
      if (asset) {
        a.href = asset.url;
      }
    });
  }

  var cached = null;
  try {
    cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
  } catch (e) {}
  if (cached) {
    pointLinks(cached);
  } else if (window.fetch && document.querySelector('a[href^="' + RELEASES + '"]')) {
    fetch(LATEST_API).then(function (r) {
      return r.ok ? r.json() : null;
    }).then(function (release) {
      if (!release) {
        return;
      }
      var assets = release.assets.map(function (x) { return { name: x.name, url: x.browser_download_url }; });
      pointLinks(assets);
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(assets));
      } catch (e) {}
    }).catch(function () {});
  }

  var SYNC_SLACK_S = 0.15;
  document.querySelectorAll('.pa-sync').forEach(function (group) {
    var videos = [].slice.call(group.querySelectorAll('video'));
    if (videos.length < 2) {
      return;
    }
    var ready = 0;
    function restart() {
      videos.forEach(function (v) {
        v.currentTime = 0;
        var p = v.play();
        if (p) {
          p.catch(function () {});
        }
      });
    }
    videos.forEach(function (v) {
      v.muted = true;
      v.addEventListener('ended', restart);
      if (v.readyState >= 3) {
        ready++;
      } else {
        v.addEventListener('canplay', function () {
          if (++ready === videos.length) {
            restart();
          }
        }, { once: true });
      }
    });
    if (ready === videos.length) {
      restart();
    }
    setInterval(function () {
      for (var i = 1; i < videos.length; i++) {
        if (Math.abs(videos[i].currentTime - videos[0].currentTime) > SYNC_SLACK_S) {
          videos[i].currentTime = videos[0].currentTime;
        }
      }
    }, 1000);
  });
}());
