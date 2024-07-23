//@ts-nocheck
import { css } from "styled-components";
import IoniconsEot from "./ionicons/ionicons.eot";
import IoniconsWoff2 from "./ionicons/ionicons.woff2";
import IoniconsWoff from "./ionicons/ionicons.woff";
import IoniconsTtf from "./ionicons/ionicons.ttf";
import IoniconsSvg from "./ionicons/ionicons.svg";

export const IonIcons = css`
    @font-face {
        font-family: "Ionicons";
        font-display: swap;
        src: url(${IoniconsEot});
        src: url(${IoniconsEot}) format("embedded-opentype"),
            url(${IoniconsWoff2}) format("woff2"),
            url(${IoniconsWoff}) format("woff"),
            url(${IoniconsTtf}) format("truetype"),
            url(${IoniconsSvg}) format("svg");
        font-weight: normal;
        font-style: normal;
    }
    .ion,
    .ionicons,
    .ion-ios-add:before,
    .ion-ios-add-circle:before,
    .ion-ios-add-circle-outline:before,
    .ion-ios-airplane:before,
    .ion-ios-alarm:before,
    .ion-ios-albums:before,
    .ion-ios-alert:before,
    .ion-ios-american-football:before,
    .ion-ios-analytics:before,
    .ion-ios-aperture:before,
    .ion-ios-apps:before,
    .ion-ios-appstore:before,
    .ion-ios-archive:before,
    .ion-ios-arrow-back:before,
    .ion-ios-arrow-down:before,
    .ion-ios-arrow-dropdown:before,
    .ion-ios-arrow-dropdown-circle:before,
    .ion-ios-arrow-dropleft:before,
    .ion-ios-arrow-dropleft-circle:before,
    .ion-ios-arrow-dropright:before,
    .ion-ios-arrow-dropright-circle:before,
    .ion-ios-arrow-dropup:before,
    .ion-ios-arrow-dropup-circle:before,
    .ion-ios-arrow-forward:before,
    .ion-ios-arrow-round-back:before,
    .ion-ios-arrow-round-down:before,
    .ion-ios-arrow-round-forward:before,
    .ion-ios-arrow-round-up:before,
    .ion-ios-arrow-up:before,
    .ion-ios-at:before,
    .ion-ios-attach:before,
    .ion-ios-backspace:before,
    .ion-ios-barcode:before,
    .ion-ios-baseball:before,
    .ion-ios-basket:before,
    .ion-ios-basketball:before,
    .ion-ios-battery-charging:before,
    .ion-ios-battery-dead:before,
    .ion-ios-battery-full:before,
    .ion-ios-beaker:before,
    .ion-ios-bed:before,
    .ion-ios-beer:before,
    .ion-ios-bicycle:before,
    .ion-ios-bluetooth:before,
    .ion-ios-boat:before,
    .ion-ios-body:before,
    .ion-ios-bonfire:before,
    .ion-ios-book:before,
    .ion-ios-bookmark:before,
    .ion-ios-bookmarks:before,
    .ion-ios-bowtie:before,
    .ion-ios-briefcase:before,
    .ion-ios-browsers:before,
    .ion-ios-brush:before,
    .ion-ios-bug:before,
    .ion-ios-build:before,
    .ion-ios-bulb:before,
    .ion-ios-bus:before,
    .ion-ios-business:before,
    .ion-ios-cafe:before,
    .ion-ios-calculator:before,
    .ion-ios-calendar:before,
    .ion-ios-call:before,
    .ion-ios-camera:before,
    .ion-ios-car:before,
    .ion-ios-card:before,
    .ion-ios-cart:before,
    .ion-ios-cash:before,
    .ion-ios-cellular:before,
    .ion-ios-chatboxes:before,
    .ion-ios-chatbubbles:before,
    .ion-ios-checkbox:before,
    .ion-ios-checkbox-outline:before,
    .ion-ios-checkmark:before,
    .ion-ios-checkmark-circle:before,
    .ion-ios-checkmark-circle-outline:before,
    .ion-ios-clipboard:before,
    .ion-ios-clock:before,
    .ion-ios-close:before,
    .ion-ios-close-circle:before,
    .ion-ios-close-circle-outline:before,
    .ion-ios-cloud:before,
    .ion-ios-cloud-circle:before,
    .ion-ios-cloud-done:before,
    .ion-ios-cloud-download:before,
    .ion-ios-cloud-outline:before,
    .ion-ios-cloud-upload:before,
    .ion-ios-cloudy:before,
    .ion-ios-cloudy-night:before,
    .ion-ios-code:before,
    .ion-ios-code-download:before,
    .ion-ios-code-working:before,
    .ion-ios-cog:before,
    .ion-ios-color-fill:before,
    .ion-ios-color-filter:before,
    .ion-ios-color-palette:before,
    .ion-ios-color-wand:before,
    .ion-ios-compass:before,
    .ion-ios-construct:before,
    .ion-ios-contact:before,
    .ion-ios-contacts:before,
    .ion-ios-contract:before,
    .ion-ios-contrast:before,
    .ion-ios-copy:before,
    .ion-ios-create:before,
    .ion-ios-crop:before,
    .ion-ios-cube:before,
    .ion-ios-cut:before,
    .ion-ios-desktop:before,
    .ion-ios-disc:before,
    .ion-ios-document:before,
    .ion-ios-done-all:before,
    .ion-ios-download:before,
    .ion-ios-easel:before,
    .ion-ios-egg:before,
    .ion-ios-exit:before,
    .ion-ios-expand:before,
    .ion-ios-eye:before,
    .ion-ios-eye-off:before,
    .ion-ios-fastforward:before,
    .ion-ios-female:before,
    .ion-ios-filing:before,
    .ion-ios-film:before,
    .ion-ios-finger-print:before,
    .ion-ios-fitness:before,
    .ion-ios-flag:before,
    .ion-ios-flame:before,
    .ion-ios-flash:before,
    .ion-ios-flash-off:before,
    .ion-ios-flashlight:before,
    .ion-ios-flask:before,
    .ion-ios-flower:before,
    .ion-ios-folder:before,
    .ion-ios-folder-open:before,
    .ion-ios-football:before,
    .ion-ios-funnel:before,
    .ion-ios-gift:before,
    .ion-ios-git-branch:before,
    .ion-ios-git-commit:before,
    .ion-ios-git-compare:before,
    .ion-ios-git-merge:before,
    .ion-ios-git-network:before,
    .ion-ios-git-pull-request:before,
    .ion-ios-glasses:before,
    .ion-ios-globe:before,
    .ion-ios-grid:before,
    .ion-ios-hammer:before,
    .ion-ios-hand:before,
    .ion-ios-happy:before,
    .ion-ios-headset:before,
    .ion-ios-heart:before,
    .ion-ios-heart-dislike:before,
    .ion-ios-heart-empty:before,
    .ion-ios-heart-half:before,
    .ion-ios-help:before,
    .ion-ios-help-buoy:before,
    .ion-ios-help-circle:before,
    .ion-ios-help-circle-outline:before,
    .ion-ios-home:before,
    .ion-ios-hourglass:before,
    .ion-ios-ice-cream:before,
    .ion-ios-image:before,
    .ion-ios-images:before,
    .ion-ios-infinite:before,
    .ion-ios-information:before,
    .ion-ios-information-circle:before,
    .ion-ios-information-circle-outline:before,
    .ion-ios-jet:before,
    .ion-ios-journal:before,
    .ion-ios-key:before,
    .ion-ios-keypad:before,
    .ion-ios-laptop:before,
    .ion-ios-leaf:before,
    .ion-ios-link:before,
    .ion-ios-list:before,
    .ion-ios-list-box:before,
    .ion-ios-locate:before,
    .ion-ios-lock:before,
    .ion-ios-log-in:before,
    .ion-ios-log-out:before,
    .ion-ios-magnet:before,
    .ion-ios-mail:before,
    .ion-ios-mail-open:before,
    .ion-ios-mail-unread:before,
    .ion-ios-male:before,
    .ion-ios-man:before,
    .ion-ios-map:before,
    .ion-ios-medal:before,
    .ion-ios-medical:before,
    .ion-ios-medkit:before,
    .ion-ios-megaphone:before,
    .ion-ios-menu:before,
    .ion-ios-mic:before,
    .ion-ios-mic-off:before,
    .ion-ios-microphone:before,
    .ion-ios-moon:before,
    .ion-ios-more:before,
    .ion-ios-move:before,
    .ion-ios-musical-note:before,
    .ion-ios-musical-notes:before,
    .ion-ios-navigate:before,
    .ion-ios-notifications:before,
    .ion-ios-notifications-off:before,
    .ion-ios-notifications-outline:before,
    .ion-ios-nuclear:before,
    .ion-ios-nutrition:before,
    .ion-ios-open:before,
    .ion-ios-options:before,
    .ion-ios-outlet:before,
    .ion-ios-paper:before,
    .ion-ios-paper-plane:before,
    .ion-ios-partly-sunny:before,
    .ion-ios-pause:before,
    .ion-ios-paw:before,
    .ion-ios-people:before,
    .ion-ios-person:before,
    .ion-ios-person-add:before,
    .ion-ios-phone-landscape:before,
    .ion-ios-phone-portrait:before,
    .ion-ios-photos:before,
    .ion-ios-pie:before,
    .ion-ios-pin:before,
    .ion-ios-pint:before,
    .ion-ios-pizza:before,
    .ion-ios-planet:before,
    .ion-ios-play:before,
    .ion-ios-play-circle:before,
    .ion-ios-podium:before,
    .ion-ios-power:before,
    .ion-ios-pricetag:before,
    .ion-ios-pricetags:before,
    .ion-ios-print:before,
    .ion-ios-pulse:before,
    .ion-ios-qr-scanner:before,
    .ion-ios-quote:before,
    .ion-ios-radio:before,
    .ion-ios-radio-button-off:before,
    .ion-ios-radio-button-on:before,
    .ion-ios-rainy:before,
    .ion-ios-recording:before,
    .ion-ios-redo:before,
    .ion-ios-refresh:before,
    .ion-ios-refresh-circle:before,
    .ion-ios-remove:before,
    .ion-ios-remove-circle:before,
    .ion-ios-remove-circle-outline:before,
    .ion-ios-reorder:before,
    .ion-ios-repeat:before,
    .ion-ios-resize:before,
    .ion-ios-restaurant:before,
    .ion-ios-return-left:before,
    .ion-ios-return-right:before,
    .ion-ios-reverse-camera:before,
    .ion-ios-rewind:before,
    .ion-ios-ribbon:before,
    .ion-ios-rocket:before,
    .ion-ios-rose:before,
    .ion-ios-sad:before,
    .ion-ios-save:before,
    .ion-ios-school:before,
    .ion-ios-search:before,
    .ion-ios-send:before,
    .ion-ios-settings:before,
    .ion-ios-share:before,
    .ion-ios-share-alt:before,
    .ion-ios-shirt:before,
    .ion-ios-shuffle:before,
    .ion-ios-skip-backward:before,
    .ion-ios-skip-forward:before,
    .ion-ios-snow:before,
    .ion-ios-speedometer:before,
    .ion-ios-square:before,
    .ion-ios-square-outline:before,
    .ion-ios-star:before,
    .ion-ios-star-half:before,
    .ion-ios-star-outline:before,
    .ion-ios-stats:before,
    .ion-ios-stopwatch:before,
    .ion-ios-subway:before,
    .ion-ios-sunny:before,
    .ion-ios-swap:before,
    .ion-ios-switch:before,
    .ion-ios-sync:before,
    .ion-ios-tablet-landscape:before,
    .ion-ios-tablet-portrait:before,
    .ion-ios-tennisball:before,
    .ion-ios-text:before,
    .ion-ios-thermometer:before,
    .ion-ios-thumbs-down:before,
    .ion-ios-thumbs-up:before,
    .ion-ios-thunderstorm:before,
    .ion-ios-time:before,
    .ion-ios-timer:before,
    .ion-ios-today:before,
    .ion-ios-train:before,
    .ion-ios-transgender:before,
    .ion-ios-trash:before,
    .ion-ios-trending-down:before,
    .ion-ios-trending-up:before,
    .ion-ios-trophy:before,
    .ion-ios-tv:before,
    .ion-ios-umbrella:before,
    .ion-ios-undo:before,
    .ion-ios-unlock:before,
    .ion-ios-videocam:before,
    .ion-ios-volume-high:before,
    .ion-ios-volume-low:before,
    .ion-ios-volume-mute:before,
    .ion-ios-volume-off:before,
    .ion-ios-walk:before,
    .ion-ios-wallet:before,
    .ion-ios-warning:before,
    .ion-ios-watch:before,
    .ion-ios-water:before,
    .ion-ios-wifi:before,
    .ion-ios-wine:before,
    .ion-ios-woman:before,
    .ion-logo-android:before,
    .ion-logo-angular:before,
    .ion-logo-apple:before,
    .ion-logo-bitbucket:before,
    .ion-logo-bitcoin:before,
    .ion-logo-buffer:before,
    .ion-logo-chrome:before,
    .ion-logo-closed-captioning:before,
    .ion-logo-codepen:before,
    .ion-logo-css3:before,
    .ion-logo-designernews:before,
    .ion-logo-dribbble:before,
    .ion-logo-dropbox:before,
    .ion-logo-euro:before,
    .ion-logo-facebook:before,
    .ion-logo-flickr:before,
    .ion-logo-foursquare:before,
    .ion-logo-freebsd-devil:before,
    .ion-logo-game-controller-a:before,
    .ion-logo-game-controller-b:before,
    .ion-logo-github:before,
    .ion-logo-google:before,
    .ion-logo-googleplus:before,
    .ion-logo-hackernews:before,
    .ion-logo-html5:before,
    .ion-logo-instagram:before,
    .ion-logo-ionic:before,
    .ion-logo-ionitron:before,
    .ion-logo-javascript:before,
    .ion-logo-linkedin:before,
    .ion-logo-markdown:before,
    .ion-logo-model-s:before,
    .ion-logo-no-smoking:before,
    .ion-logo-nodejs:before,
    .ion-logo-npm:before,
    .ion-logo-octocat:before,
    .ion-logo-pinterest:before,
    .ion-logo-playstation:before,
    .ion-logo-polymer:before,
    .ion-logo-python:before,
    .ion-logo-reddit:before,
    .ion-logo-rss:before,
    .ion-logo-sass:before,
    .ion-logo-skype:before,
    .ion-logo-slack:before,
    .ion-logo-snapchat:before,
    .ion-logo-steam:before,
    .ion-logo-tumblr:before,
    .ion-logo-tux:before,
    .ion-logo-twitch:before,
    .ion-logo-twitter:before,
    .ion-logo-usd:before,
    .ion-logo-vimeo:before,
    .ion-logo-vk:before,
    .ion-logo-whatsapp:before,
    .ion-logo-windows:before,
    .ion-logo-wordpress:before,
    .ion-logo-xbox:before,
    .ion-logo-xing:before,
    .ion-logo-yahoo:before,
    .ion-logo-yen:before,
    .ion-logo-youtube:before,
    .ion-md-add:before,
    .ion-md-add-circle:before,
    .ion-md-add-circle-outline:before,
    .ion-md-airplane:before,
    .ion-md-alarm:before,
    .ion-md-albums:before,
    .ion-md-alert:before,
    .ion-md-american-football:before,
    .ion-md-analytics:before,
    .ion-md-aperture:before,
    .ion-md-apps:before,
    .ion-md-appstore:before,
    .ion-md-archive:before,
    .ion-md-arrow-back:before,
    .ion-md-arrow-down:before,
    .ion-md-arrow-dropdown:before,
    .ion-md-arrow-dropdown-circle:before,
    .ion-md-arrow-dropleft:before,
    .ion-md-arrow-dropleft-circle:before,
    .ion-md-arrow-dropright:before,
    .ion-md-arrow-dropright-circle:before,
    .ion-md-arrow-dropup:before,
    .ion-md-arrow-dropup-circle:before,
    .ion-md-arrow-forward:before,
    .ion-md-arrow-round-back:before,
    .ion-md-arrow-round-down:before,
    .ion-md-arrow-round-forward:before,
    .ion-md-arrow-round-up:before,
    .ion-md-arrow-up:before,
    .ion-md-at:before,
    .ion-md-attach:before,
    .ion-md-backspace:before,
    .ion-md-barcode:before,
    .ion-md-baseball:before,
    .ion-md-basket:before,
    .ion-md-basketball:before,
    .ion-md-battery-charging:before,
    .ion-md-battery-dead:before,
    .ion-md-battery-full:before,
    .ion-md-beaker:before,
    .ion-md-bed:before,
    .ion-md-beer:before,
    .ion-md-bicycle:before,
    .ion-md-bluetooth:before,
    .ion-md-boat:before,
    .ion-md-body:before,
    .ion-md-bonfire:before,
    .ion-md-book:before,
    .ion-md-bookmark:before,
    .ion-md-bookmarks:before,
    .ion-md-bowtie:before,
    .ion-md-briefcase:before,
    .ion-md-browsers:before,
    .ion-md-brush:before,
    .ion-md-bug:before,
    .ion-md-build:before,
    .ion-md-bulb:before,
    .ion-md-bus:before,
    .ion-md-business:before,
    .ion-md-cafe:before,
    .ion-md-calculator:before,
    .ion-md-calendar:before,
    .ion-md-call:before,
    .ion-md-camera:before,
    .ion-md-car:before,
    .ion-md-card:before,
    .ion-md-cart:before,
    .ion-md-cash:before,
    .ion-md-cellular:before,
    .ion-md-chatboxes:before,
    .ion-md-chatbubbles:before,
    .ion-md-checkbox:before,
    .ion-md-checkbox-outline:before,
    .ion-md-checkmark:before,
    .ion-md-checkmark-circle:before,
    .ion-md-checkmark-circle-outline:before,
    .ion-md-clipboard:before,
    .ion-md-clock:before,
    .ion-md-close:before,
    .ion-md-close-circle:before,
    .ion-md-close-circle-outline:before,
    .ion-md-cloud:before,
    .ion-md-cloud-circle:before,
    .ion-md-cloud-done:before,
    .ion-md-cloud-download:before,
    .ion-md-cloud-outline:before,
    .ion-md-cloud-upload:before,
    .ion-md-cloudy:before,
    .ion-md-cloudy-night:before,
    .ion-md-code:before,
    .ion-md-code-download:before,
    .ion-md-code-working:before,
    .ion-md-cog:before,
    .ion-md-color-fill:before,
    .ion-md-color-filter:before,
    .ion-md-color-palette:before,
    .ion-md-color-wand:before,
    .ion-md-compass:before,
    .ion-md-construct:before,
    .ion-md-contact:before,
    .ion-md-contacts:before,
    .ion-md-contract:before,
    .ion-md-contrast:before,
    .ion-md-copy:before,
    .ion-md-create:before,
    .ion-md-crop:before,
    .ion-md-cube:before,
    .ion-md-cut:before,
    .ion-md-desktop:before,
    .ion-md-disc:before,
    .ion-md-document:before,
    .ion-md-done-all:before,
    .ion-md-download:before,
    .ion-md-easel:before,
    .ion-md-egg:before,
    .ion-md-exit:before,
    .ion-md-expand:before,
    .ion-md-eye:before,
    .ion-md-eye-off:before,
    .ion-md-fastforward:before,
    .ion-md-female:before,
    .ion-md-filing:before,
    .ion-md-film:before,
    .ion-md-finger-print:before,
    .ion-md-fitness:before,
    .ion-md-flag:before,
    .ion-md-flame:before,
    .ion-md-flash:before,
    .ion-md-flash-off:before,
    .ion-md-flashlight:before,
    .ion-md-flask:before,
    .ion-md-flower:before,
    .ion-md-folder:before,
    .ion-md-folder-open:before,
    .ion-md-football:before,
    .ion-md-funnel:before,
    .ion-md-gift:before,
    .ion-md-git-branch:before,
    .ion-md-git-commit:before,
    .ion-md-git-compare:before,
    .ion-md-git-merge:before,
    .ion-md-git-network:before,
    .ion-md-git-pull-request:before,
    .ion-md-glasses:before,
    .ion-md-globe:before,
    .ion-md-grid:before,
    .ion-md-hammer:before,
    .ion-md-hand:before,
    .ion-md-happy:before,
    .ion-md-headset:before,
    .ion-md-heart:before,
    .ion-md-heart-dislike:before,
    .ion-md-heart-empty:before,
    .ion-md-heart-half:before,
    .ion-md-help:before,
    .ion-md-help-buoy:before,
    .ion-md-help-circle:before,
    .ion-md-help-circle-outline:before,
    .ion-md-home:before,
    .ion-md-hourglass:before,
    .ion-md-ice-cream:before,
    .ion-md-image:before,
    .ion-md-images:before,
    .ion-md-infinite:before,
    .ion-md-information:before,
    .ion-md-information-circle:before,
    .ion-md-information-circle-outline:before,
    .ion-md-jet:before,
    .ion-md-journal:before,
    .ion-md-key:before,
    .ion-md-keypad:before,
    .ion-md-laptop:before,
    .ion-md-leaf:before,
    .ion-md-link:before,
    .ion-md-list:before,
    .ion-md-list-box:before,
    .ion-md-locate:before,
    .ion-md-lock:before,
    .ion-md-log-in:before,
    .ion-md-log-out:before,
    .ion-md-magnet:before,
    .ion-md-mail:before,
    .ion-md-mail-open:before,
    .ion-md-mail-unread:before,
    .ion-md-male:before,
    .ion-md-man:before,
    .ion-md-map:before,
    .ion-md-medal:before,
    .ion-md-medical:before,
    .ion-md-medkit:before,
    .ion-md-megaphone:before,
    .ion-md-menu:before,
    .ion-md-mic:before,
    .ion-md-mic-off:before,
    .ion-md-microphone:before,
    .ion-md-moon:before,
    .ion-md-more:before,
    .ion-md-move:before,
    .ion-md-musical-note:before,
    .ion-md-musical-notes:before,
    .ion-md-navigate:before,
    .ion-md-notifications:before,
    .ion-md-notifications-off:before,
    .ion-md-notifications-outline:before,
    .ion-md-nuclear:before,
    .ion-md-nutrition:before,
    .ion-md-open:before,
    .ion-md-options:before,
    .ion-md-outlet:before,
    .ion-md-paper:before,
    .ion-md-paper-plane:before,
    .ion-md-partly-sunny:before,
    .ion-md-pause:before,
    .ion-md-paw:before,
    .ion-md-people:before,
    .ion-md-person:before,
    .ion-md-person-add:before,
    .ion-md-phone-landscape:before,
    .ion-md-phone-portrait:before,
    .ion-md-photos:before,
    .ion-md-pie:before,
    .ion-md-pin:before,
    .ion-md-pint:before,
    .ion-md-pizza:before,
    .ion-md-planet:before,
    .ion-md-play:before,
    .ion-md-play-circle:before,
    .ion-md-podium:before,
    .ion-md-power:before,
    .ion-md-pricetag:before,
    .ion-md-pricetags:before,
    .ion-md-print:before,
    .ion-md-pulse:before,
    .ion-md-qr-scanner:before,
    .ion-md-quote:before,
    .ion-md-radio:before,
    .ion-md-radio-button-off:before,
    .ion-md-radio-button-on:before,
    .ion-md-rainy:before,
    .ion-md-recording:before,
    .ion-md-redo:before,
    .ion-md-refresh:before,
    .ion-md-refresh-circle:before,
    .ion-md-remove:before,
    .ion-md-remove-circle:before,
    .ion-md-remove-circle-outline:before,
    .ion-md-reorder:before,
    .ion-md-repeat:before,
    .ion-md-resize:before,
    .ion-md-restaurant:before,
    .ion-md-return-left:before,
    .ion-md-return-right:before,
    .ion-md-reverse-camera:before,
    .ion-md-rewind:before,
    .ion-md-ribbon:before,
    .ion-md-rocket:before,
    .ion-md-rose:before,
    .ion-md-sad:before,
    .ion-md-save:before,
    .ion-md-school:before,
    .ion-md-search:before,
    .ion-md-send:before,
    .ion-md-settings:before,
    .ion-md-share:before,
    .ion-md-share-alt:before,
    .ion-md-shirt:before,
    .ion-md-shuffle:before,
    .ion-md-skip-backward:before,
    .ion-md-skip-forward:before,
    .ion-md-snow:before,
    .ion-md-speedometer:before,
    .ion-md-square:before,
    .ion-md-square-outline:before,
    .ion-md-star:before,
    .ion-md-star-half:before,
    .ion-md-star-outline:before,
    .ion-md-stats:before,
    .ion-md-stopwatch:before,
    .ion-md-subway:before,
    .ion-md-sunny:before,
    .ion-md-swap:before,
    .ion-md-switch:before,
    .ion-md-sync:before,
    .ion-md-tablet-landscape:before,
    .ion-md-tablet-portrait:before,
    .ion-md-tennisball:before,
    .ion-md-text:before,
    .ion-md-thermometer:before,
    .ion-md-thumbs-down:before,
    .ion-md-thumbs-up:before,
    .ion-md-thunderstorm:before,
    .ion-md-time:before,
    .ion-md-timer:before,
    .ion-md-today:before,
    .ion-md-train:before,
    .ion-md-transgender:before,
    .ion-md-trash:before,
    .ion-md-trending-down:before,
    .ion-md-trending-up:before,
    .ion-md-trophy:before,
    .ion-md-tv:before,
    .ion-md-umbrella:before,
    .ion-md-undo:before,
    .ion-md-unlock:before,
    .ion-md-videocam:before,
    .ion-md-volume-high:before,
    .ion-md-volume-low:before,
    .ion-md-volume-mute:before,
    .ion-md-volume-off:before,
    .ion-md-walk:before,
    .ion-md-wallet:before,
    .ion-md-warning:before,
    .ion-md-watch:before,
    .ion-md-water:before,
    .ion-md-wifi:before,
    .ion-md-wine:before,
    .ion-md-woman:before {
        display: inline-block;
        font-family: "Ionicons";
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        text-rendering: auto;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .ion-ios-add:before {
        content: "\f102";
    }
    .ion-ios-add-circle:before {
        content: "\f101";
    }
    .ion-ios-add-circle-outline:before {
        content: "\f100";
    }
    .ion-ios-airplane:before {
        content: "\f137";
    }
    .ion-ios-alarm:before {
        content: "\f3c8";
    }
    .ion-ios-albums:before {
        content: "\f3ca";
    }
    .ion-ios-alert:before {
        content: "\f104";
    }
    .ion-ios-american-football:before {
        content: "\f106";
    }
    .ion-ios-analytics:before {
        content: "\f3ce";
    }
    .ion-ios-aperture:before {
        content: "\f108";
    }
    .ion-ios-apps:before {
        content: "\f10a";
    }
    .ion-ios-appstore:before {
        content: "\f10c";
    }
    .ion-ios-archive:before {
        content: "\f10e";
    }
    .ion-ios-arrow-back:before {
        content: "\f3cf";
    }
    .ion-ios-arrow-down:before {
        content: "\f3d0";
    }
    .ion-ios-arrow-dropdown:before {
        content: "\f110";
    }
    .ion-ios-arrow-dropdown-circle:before {
        content: "\f125";
    }
    .ion-ios-arrow-dropleft:before {
        content: "\f112";
    }
    .ion-ios-arrow-dropleft-circle:before {
        content: "\f129";
    }
    .ion-ios-arrow-dropright:before {
        content: "\f114";
    }
    .ion-ios-arrow-dropright-circle:before {
        content: "\f12b";
    }
    .ion-ios-arrow-dropup:before {
        content: "\f116";
    }
    .ion-ios-arrow-dropup-circle:before {
        content: "\f12d";
    }
    .ion-ios-arrow-forward:before {
        content: "\f3d1";
    }
    .ion-ios-arrow-round-back:before {
        content: "\f117";
    }
    .ion-ios-arrow-round-down:before {
        content: "\f118";
    }
    .ion-ios-arrow-round-forward:before {
        content: "\f119";
    }
    .ion-ios-arrow-round-up:before {
        content: "\f11a";
    }
    .ion-ios-arrow-up:before {
        content: "\f3d8";
    }
    .ion-ios-at:before {
        content: "\f3da";
    }
    .ion-ios-attach:before {
        content: "\f11b";
    }
    .ion-ios-backspace:before {
        content: "\f11d";
    }
    .ion-ios-barcode:before {
        content: "\f3dc";
    }
    .ion-ios-baseball:before {
        content: "\f3de";
    }
    .ion-ios-basket:before {
        content: "\f11f";
    }
    .ion-ios-basketball:before {
        content: "\f3e0";
    }
    .ion-ios-battery-charging:before {
        content: "\f120";
    }
    .ion-ios-battery-dead:before {
        content: "\f121";
    }
    .ion-ios-battery-full:before {
        content: "\f122";
    }
    .ion-ios-beaker:before {
        content: "\f124";
    }
    .ion-ios-bed:before {
        content: "\f139";
    }
    .ion-ios-beer:before {
        content: "\f126";
    }
    .ion-ios-bicycle:before {
        content: "\f127";
    }
    .ion-ios-bluetooth:before {
        content: "\f128";
    }
    .ion-ios-boat:before {
        content: "\f12a";
    }
    .ion-ios-body:before {
        content: "\f3e4";
    }
    .ion-ios-bonfire:before {
        content: "\f12c";
    }
    .ion-ios-book:before {
        content: "\f3e8";
    }
    .ion-ios-bookmark:before {
        content: "\f12e";
    }
    .ion-ios-bookmarks:before {
        content: "\f3ea";
    }
    .ion-ios-bowtie:before {
        content: "\f130";
    }
    .ion-ios-briefcase:before {
        content: "\f3ee";
    }
    .ion-ios-browsers:before {
        content: "\f3f0";
    }
    .ion-ios-brush:before {
        content: "\f132";
    }
    .ion-ios-bug:before {
        content: "\f134";
    }
    .ion-ios-build:before {
        content: "\f136";
    }
    .ion-ios-bulb:before {
        content: "\f138";
    }
    .ion-ios-bus:before {
        content: "\f13a";
    }
    .ion-ios-business:before {
        content: "\f1a3";
    }
    .ion-ios-cafe:before {
        content: "\f13c";
    }
    .ion-ios-calculator:before {
        content: "\f3f2";
    }
    .ion-ios-calendar:before {
        content: "\f3f4";
    }
    .ion-ios-call:before {
        content: "\f13e";
    }
    .ion-ios-camera:before {
        content: "\f3f6";
    }
    .ion-ios-car:before {
        content: "\f140";
    }
    .ion-ios-card:before {
        content: "\f142";
    }
    .ion-ios-cart:before {
        content: "\f3f8";
    }
    .ion-ios-cash:before {
        content: "\f144";
    }
    .ion-ios-cellular:before {
        content: "\f13d";
    }
    .ion-ios-chatboxes:before {
        content: "\f3fa";
    }
    .ion-ios-chatbubbles:before {
        content: "\f146";
    }
    .ion-ios-checkbox:before {
        content: "\f148";
    }
    .ion-ios-checkbox-outline:before {
        content: "\f147";
    }
    .ion-ios-checkmark:before {
        content: "\f3ff";
    }
    .ion-ios-checkmark-circle:before {
        content: "\f14a";
    }
    .ion-ios-checkmark-circle-outline:before {
        content: "\f149";
    }
    .ion-ios-clipboard:before {
        content: "\f14c";
    }
    .ion-ios-clock:before {
        content: "\f403";
    }
    .ion-ios-close:before {
        content: "\f406";
    }
    .ion-ios-close-circle:before {
        content: "\f14e";
    }
    .ion-ios-close-circle-outline:before {
        content: "\f14d";
    }
    .ion-ios-cloud:before {
        content: "\f40c";
    }
    .ion-ios-cloud-circle:before {
        content: "\f152";
    }
    .ion-ios-cloud-done:before {
        content: "\f154";
    }
    .ion-ios-cloud-download:before {
        content: "\f408";
    }
    .ion-ios-cloud-outline:before {
        content: "\f409";
    }
    .ion-ios-cloud-upload:before {
        content: "\f40b";
    }
    .ion-ios-cloudy:before {
        content: "\f410";
    }
    .ion-ios-cloudy-night:before {
        content: "\f40e";
    }
    .ion-ios-code:before {
        content: "\f157";
    }
    .ion-ios-code-download:before {
        content: "\f155";
    }
    .ion-ios-code-working:before {
        content: "\f156";
    }
    .ion-ios-cog:before {
        content: "\f412";
    }
    .ion-ios-color-fill:before {
        content: "\f159";
    }
    .ion-ios-color-filter:before {
        content: "\f414";
    }
    .ion-ios-color-palette:before {
        content: "\f15b";
    }
    .ion-ios-color-wand:before {
        content: "\f416";
    }
    .ion-ios-compass:before {
        content: "\f15d";
    }
    .ion-ios-construct:before {
        content: "\f15f";
    }
    .ion-ios-contact:before {
        content: "\f41a";
    }
    .ion-ios-contacts:before {
        content: "\f161";
    }
    .ion-ios-contract:before {
        content: "\f162";
    }
    .ion-ios-contrast:before {
        content: "\f163";
    }
    .ion-ios-copy:before {
        content: "\f41c";
    }
    .ion-ios-create:before {
        content: "\f165";
    }
    .ion-ios-crop:before {
        content: "\f41e";
    }
    .ion-ios-cube:before {
        content: "\f168";
    }
    .ion-ios-cut:before {
        content: "\f16a";
    }
    .ion-ios-desktop:before {
        content: "\f16c";
    }
    .ion-ios-disc:before {
        content: "\f16e";
    }
    .ion-ios-document:before {
        content: "\f170";
    }
    .ion-ios-done-all:before {
        content: "\f171";
    }
    .ion-ios-download:before {
        content: "\f420";
    }
    .ion-ios-easel:before {
        content: "\f173";
    }
    .ion-ios-egg:before {
        content: "\f175";
    }
    .ion-ios-exit:before {
        content: "\f177";
    }
    .ion-ios-expand:before {
        content: "\f178";
    }
    .ion-ios-eye:before {
        content: "\f425";
    }
    .ion-ios-eye-off:before {
        content: "\f17a";
    }
    .ion-ios-fastforward:before {
        content: "\f427";
    }
    .ion-ios-female:before {
        content: "\f17b";
    }
    .ion-ios-filing:before {
        content: "\f429";
    }
    .ion-ios-film:before {
        content: "\f42b";
    }
    .ion-ios-finger-print:before {
        content: "\f17c";
    }
    .ion-ios-fitness:before {
        content: "\f1ab";
    }
    .ion-ios-flag:before {
        content: "\f42d";
    }
    .ion-ios-flame:before {
        content: "\f42f";
    }
    .ion-ios-flash:before {
        content: "\f17e";
    }
    .ion-ios-flash-off:before {
        content: "\f12f";
    }
    .ion-ios-flashlight:before {
        content: "\f141";
    }
    .ion-ios-flask:before {
        content: "\f431";
    }
    .ion-ios-flower:before {
        content: "\f433";
    }
    .ion-ios-folder:before {
        content: "\f435";
    }
    .ion-ios-folder-open:before {
        content: "\f180";
    }
    .ion-ios-football:before {
        content: "\f437";
    }
    .ion-ios-funnel:before {
        content: "\f182";
    }
    .ion-ios-gift:before {
        content: "\f191";
    }
    .ion-ios-git-branch:before {
        content: "\f183";
    }
    .ion-ios-git-commit:before {
        content: "\f184";
    }
    .ion-ios-git-compare:before {
        content: "\f185";
    }
    .ion-ios-git-merge:before {
        content: "\f186";
    }
    .ion-ios-git-network:before {
        content: "\f187";
    }
    .ion-ios-git-pull-request:before {
        content: "\f188";
    }
    .ion-ios-glasses:before {
        content: "\f43f";
    }
    .ion-ios-globe:before {
        content: "\f18a";
    }
    .ion-ios-grid:before {
        content: "\f18c";
    }
    .ion-ios-hammer:before {
        content: "\f18e";
    }
    .ion-ios-hand:before {
        content: "\f190";
    }
    .ion-ios-happy:before {
        content: "\f192";
    }
    .ion-ios-headset:before {
        content: "\f194";
    }
    .ion-ios-heart:before {
        content: "\f443";
    }
    .ion-ios-heart-dislike:before {
        content: "\f13f";
    }
    .ion-ios-heart-empty:before {
        content: "\f19b";
    }
    .ion-ios-heart-half:before {
        content: "\f19d";
    }
    .ion-ios-help:before {
        content: "\f446";
    }
    .ion-ios-help-buoy:before {
        content: "\f196";
    }
    .ion-ios-help-circle:before {
        content: "\f198";
    }
    .ion-ios-help-circle-outline:before {
        content: "\f197";
    }
    .ion-ios-home:before {
        content: "\f448";
    }
    .ion-ios-hourglass:before {
        content: "\f103";
    }
    .ion-ios-ice-cream:before {
        content: "\f19a";
    }
    .ion-ios-image:before {
        content: "\f19c";
    }
    .ion-ios-images:before {
        content: "\f19e";
    }
    .ion-ios-infinite:before {
        content: "\f44a";
    }
    .ion-ios-information:before {
        content: "\f44d";
    }
    .ion-ios-information-circle:before {
        content: "\f1a0";
    }
    .ion-ios-information-circle-outline:before {
        content: "\f19f";
    }
    .ion-ios-jet:before {
        content: "\f1a5";
    }
    .ion-ios-journal:before {
        content: "\f189";
    }
    .ion-ios-key:before {
        content: "\f1a7";
    }
    .ion-ios-keypad:before {
        content: "\f450";
    }
    .ion-ios-laptop:before {
        content: "\f1a8";
    }
    .ion-ios-leaf:before {
        content: "\f1aa";
    }
    .ion-ios-link:before {
        content: "\f22a";
    }
    .ion-ios-list:before {
        content: "\f454";
    }
    .ion-ios-list-box:before {
        content: "\f143";
    }
    .ion-ios-locate:before {
        content: "\f1ae";
    }
    .ion-ios-lock:before {
        content: "\f1b0";
    }
    .ion-ios-log-in:before {
        content: "\f1b1";
    }
    .ion-ios-log-out:before {
        content: "\f1b2";
    }
    .ion-ios-magnet:before {
        content: "\f1b4";
    }
    .ion-ios-mail:before {
        content: "\f1b8";
    }
    .ion-ios-mail-open:before {
        content: "\f1b6";
    }
    .ion-ios-mail-unread:before {
        content: "\f145";
    }
    .ion-ios-male:before {
        content: "\f1b9";
    }
    .ion-ios-man:before {
        content: "\f1bb";
    }
    .ion-ios-map:before {
        content: "\f1bd";
    }
    .ion-ios-medal:before {
        content: "\f1bf";
    }
    .ion-ios-medical:before {
        content: "\f45c";
    }
    .ion-ios-medkit:before {
        content: "\f45e";
    }
    .ion-ios-megaphone:before {
        content: "\f1c1";
    }
    .ion-ios-menu:before {
        content: "\f1c3";
    }
    .ion-ios-mic:before {
        content: "\f461";
    }
    .ion-ios-mic-off:before {
        content: "\f45f";
    }
    .ion-ios-microphone:before {
        content: "\f1c6";
    }
    .ion-ios-moon:before {
        content: "\f468";
    }
    .ion-ios-more:before {
        content: "\f1c8";
    }
    .ion-ios-move:before {
        content: "\f1cb";
    }
    .ion-ios-musical-note:before {
        content: "\f46b";
    }
    .ion-ios-musical-notes:before {
        content: "\f46c";
    }
    .ion-ios-navigate:before {
        content: "\f46e";
    }
    .ion-ios-notifications:before {
        content: "\f1d3";
    }
    .ion-ios-notifications-off:before {
        content: "\f1d1";
    }
    .ion-ios-notifications-outline:before {
        content: "\f133";
    }
    .ion-ios-nuclear:before {
        content: "\f1d5";
    }
    .ion-ios-nutrition:before {
        content: "\f470";
    }
    .ion-ios-open:before {
        content: "\f1d7";
    }
    .ion-ios-options:before {
        content: "\f1d9";
    }
    .ion-ios-outlet:before {
        content: "\f1db";
    }
    .ion-ios-paper:before {
        content: "\f472";
    }
    .ion-ios-paper-plane:before {
        content: "\f1dd";
    }
    .ion-ios-partly-sunny:before {
        content: "\f1df";
    }
    .ion-ios-pause:before {
        content: "\f478";
    }
    .ion-ios-paw:before {
        content: "\f47a";
    }
    .ion-ios-people:before {
        content: "\f47c";
    }
    .ion-ios-person:before {
        content: "\f47e";
    }
    .ion-ios-person-add:before {
        content: "\f1e1";
    }
    .ion-ios-phone-landscape:before {
        content: "\f1e2";
    }
    .ion-ios-phone-portrait:before {
        content: "\f1e3";
    }
    .ion-ios-photos:before {
        content: "\f482";
    }
    .ion-ios-pie:before {
        content: "\f484";
    }
    .ion-ios-pin:before {
        content: "\f1e5";
    }
    .ion-ios-pint:before {
        content: "\f486";
    }
    .ion-ios-pizza:before {
        content: "\f1e7";
    }
    .ion-ios-planet:before {
        content: "\f1eb";
    }
    .ion-ios-play:before {
        content: "\f488";
    }
    .ion-ios-play-circle:before {
        content: "\f113";
    }
    .ion-ios-podium:before {
        content: "\f1ed";
    }
    .ion-ios-power:before {
        content: "\f1ef";
    }
    .ion-ios-pricetag:before {
        content: "\f48d";
    }
    .ion-ios-pricetags:before {
        content: "\f48f";
    }
    .ion-ios-print:before {
        content: "\f1f1";
    }
    .ion-ios-pulse:before {
        content: "\f493";
    }
    .ion-ios-qr-scanner:before {
        content: "\f1f3";
    }
    .ion-ios-quote:before {
        content: "\f1f5";
    }
    .ion-ios-radio:before {
        content: "\f1f9";
    }
    .ion-ios-radio-button-off:before {
        content: "\f1f6";
    }
    .ion-ios-radio-button-on:before {
        content: "\f1f7";
    }
    .ion-ios-rainy:before {
        content: "\f495";
    }
    .ion-ios-recording:before {
        content: "\f497";
    }
    .ion-ios-redo:before {
        content: "\f499";
    }
    .ion-ios-refresh:before {
        content: "\f49c";
    }
    .ion-ios-refresh-circle:before {
        content: "\f135";
    }
    .ion-ios-remove:before {
        content: "\f1fc";
    }
    .ion-ios-remove-circle:before {
        content: "\f1fb";
    }
    .ion-ios-remove-circle-outline:before {
        content: "\f1fa";
    }
    .ion-ios-reorder:before {
        content: "\f1fd";
    }
    .ion-ios-repeat:before {
        content: "\f1fe";
    }
    .ion-ios-resize:before {
        content: "\f1ff";
    }
    .ion-ios-restaurant:before {
        content: "\f201";
    }
    .ion-ios-return-left:before {
        content: "\f202";
    }
    .ion-ios-return-right:before {
        content: "\f203";
    }
    .ion-ios-reverse-camera:before {
        content: "\f49f";
    }
    .ion-ios-rewind:before {
        content: "\f4a1";
    }
    .ion-ios-ribbon:before {
        content: "\f205";
    }
    .ion-ios-rocket:before {
        content: "\f14b";
    }
    .ion-ios-rose:before {
        content: "\f4a3";
    }
    .ion-ios-sad:before {
        content: "\f207";
    }
    .ion-ios-save:before {
        content: "\f1a6";
    }
    .ion-ios-school:before {
        content: "\f209";
    }
    .ion-ios-search:before {
        content: "\f4a5";
    }
    .ion-ios-send:before {
        content: "\f20c";
    }
    .ion-ios-settings:before {
        content: "\f4a7";
    }
    .ion-ios-share:before {
        content: "\f211";
    }
    .ion-ios-share-alt:before {
        content: "\f20f";
    }
    .ion-ios-shirt:before {
        content: "\f213";
    }
    .ion-ios-shuffle:before {
        content: "\f4a9";
    }
    .ion-ios-skip-backward:before {
        content: "\f215";
    }
    .ion-ios-skip-forward:before {
        content: "\f217";
    }
    .ion-ios-snow:before {
        content: "\f218";
    }
    .ion-ios-speedometer:before {
        content: "\f4b0";
    }
    .ion-ios-square:before {
        content: "\f21a";
    }
    .ion-ios-square-outline:before {
        content: "\f15c";
    }
    .ion-ios-star:before {
        content: "\f4b3";
    }
    .ion-ios-star-half:before {
        content: "\f4b1";
    }
    .ion-ios-star-outline:before {
        content: "\f4b2";
    }
    .ion-ios-stats:before {
        content: "\f21c";
    }
    .ion-ios-stopwatch:before {
        content: "\f4b5";
    }
    .ion-ios-subway:before {
        content: "\f21e";
    }
    .ion-ios-sunny:before {
        content: "\f4b7";
    }
    .ion-ios-swap:before {
        content: "\f21f";
    }
    .ion-ios-switch:before {
        content: "\f221";
    }
    .ion-ios-sync:before {
        content: "\f222";
    }
    .ion-ios-tablet-landscape:before {
        content: "\f223";
    }
    .ion-ios-tablet-portrait:before {
        content: "\f24e";
    }
    .ion-ios-tennisball:before {
        content: "\f4bb";
    }
    .ion-ios-text:before {
        content: "\f250";
    }
    .ion-ios-thermometer:before {
        content: "\f252";
    }
    .ion-ios-thumbs-down:before {
        content: "\f254";
    }
    .ion-ios-thumbs-up:before {
        content: "\f256";
    }
    .ion-ios-thunderstorm:before {
        content: "\f4bd";
    }
    .ion-ios-time:before {
        content: "\f4bf";
    }
    .ion-ios-timer:before {
        content: "\f4c1";
    }
    .ion-ios-today:before {
        content: "\f14f";
    }
    .ion-ios-train:before {
        content: "\f258";
    }
    .ion-ios-transgender:before {
        content: "\f259";
    }
    .ion-ios-trash:before {
        content: "\f4c5";
    }
    .ion-ios-trending-down:before {
        content: "\f25a";
    }
    .ion-ios-trending-up:before {
        content: "\f25b";
    }
    .ion-ios-trophy:before {
        content: "\f25d";
    }
    .ion-ios-tv:before {
        content: "\f115";
    }
    .ion-ios-umbrella:before {
        content: "\f25f";
    }
    .ion-ios-undo:before {
        content: "\f4c7";
    }
    .ion-ios-unlock:before {
        content: "\f261";
    }
    .ion-ios-videocam:before {
        content: "\f4cd";
    }
    .ion-ios-volume-high:before {
        content: "\f11c";
    }
    .ion-ios-volume-low:before {
        content: "\f11e";
    }
    .ion-ios-volume-mute:before {
        content: "\f263";
    }
    .ion-ios-volume-off:before {
        content: "\f264";
    }
    .ion-ios-walk:before {
        content: "\f266";
    }
    .ion-ios-wallet:before {
        content: "\f18b";
    }
    .ion-ios-warning:before {
        content: "\f268";
    }
    .ion-ios-watch:before {
        content: "\f269";
    }
    .ion-ios-water:before {
        content: "\f26b";
    }
    .ion-ios-wifi:before {
        content: "\f26d";
    }
    .ion-ios-wine:before {
        content: "\f26f";
    }
    .ion-ios-woman:before {
        content: "\f271";
    }
    .ion-logo-android:before {
        content: "\f225";
    }
    .ion-logo-angular:before {
        content: "\f227";
    }
    .ion-logo-apple:before {
        content: "\f229";
    }
    .ion-logo-bitbucket:before {
        content: "\f193";
    }
    .ion-logo-bitcoin:before {
        content: "\f22b";
    }
    .ion-logo-buffer:before {
        content: "\f22d";
    }
    .ion-logo-chrome:before {
        content: "\f22f";
    }
    .ion-logo-closed-captioning:before {
        content: "\f105";
    }
    .ion-logo-codepen:before {
        content: "\f230";
    }
    .ion-logo-css3:before {
        content: "\f231";
    }
    .ion-logo-designernews:before {
        content: "\f232";
    }
    .ion-logo-dribbble:before {
        content: "\f233";
    }
    .ion-logo-dropbox:before {
        content: "\f234";
    }
    .ion-logo-euro:before {
        content: "\f235";
    }
    .ion-logo-facebook:before {
        content: "\f236";
    }
    .ion-logo-flickr:before {
        content: "\f107";
    }
    .ion-logo-foursquare:before {
        content: "\f237";
    }
    .ion-logo-freebsd-devil:before {
        content: "\f238";
    }
    .ion-logo-game-controller-a:before {
        content: "\f13b";
    }
    .ion-logo-game-controller-b:before {
        content: "\f181";
    }
    .ion-logo-github:before {
        content: "\f239";
    }
    .ion-logo-google:before {
        content: "\f23a";
    }
    .ion-logo-googleplus:before {
        content: "\f23b";
    }
    .ion-logo-hackernews:before {
        content: "\f23c";
    }
    .ion-logo-html5:before {
        content: "\f23d";
    }
    .ion-logo-instagram:before {
        content: "\f23e";
    }
    .ion-logo-ionic:before {
        content: "\f150";
    }
    .ion-logo-ionitron:before {
        content: "\f151";
    }
    .ion-logo-javascript:before {
        content: "\f23f";
    }
    .ion-logo-linkedin:before {
        content: "\f240";
    }
    .ion-logo-markdown:before {
        content: "\f241";
    }
    .ion-logo-model-s:before {
        content: "\f153";
    }
    .ion-logo-no-smoking:before {
        content: "\f109";
    }
    .ion-logo-nodejs:before {
        content: "\f242";
    }
    .ion-logo-npm:before {
        content: "\f195";
    }
    .ion-logo-octocat:before {
        content: "\f243";
    }
    .ion-logo-pinterest:before {
        content: "\f244";
    }
    .ion-logo-playstation:before {
        content: "\f245";
    }
    .ion-logo-polymer:before {
        content: "\f15e";
    }
    .ion-logo-python:before {
        content: "\f246";
    }
    .ion-logo-reddit:before {
        content: "\f247";
    }
    .ion-logo-rss:before {
        content: "\f248";
    }
    .ion-logo-sass:before {
        content: "\f249";
    }
    .ion-logo-skype:before {
        content: "\f24a";
    }
    .ion-logo-slack:before {
        content: "\f10b";
    }
    .ion-logo-snapchat:before {
        content: "\f24b";
    }
    .ion-logo-steam:before {
        content: "\f24c";
    }
    .ion-logo-tumblr:before {
        content: "\f24d";
    }
    .ion-logo-tux:before {
        content: "\f2ae";
    }
    .ion-logo-twitch:before {
        content: "\f2af";
    }
    .ion-logo-twitter:before {
        content: "\f2b0";
    }
    .ion-logo-usd:before {
        content: "\f2b1";
    }
    .ion-logo-vimeo:before {
        content: "\f2c4";
    }
    .ion-logo-vk:before {
        content: "\f10d";
    }
    .ion-logo-whatsapp:before {
        content: "\f2c5";
    }
    .ion-logo-windows:before {
        content: "\f32f";
    }
    .ion-logo-wordpress:before {
        content: "\f330";
    }
    .ion-logo-xbox:before {
        content: "\f34c";
    }
    .ion-logo-xing:before {
        content: "\f10f";
    }
    .ion-logo-yahoo:before {
        content: "\f34d";
    }
    .ion-logo-yen:before {
        content: "\f34e";
    }
    .ion-logo-youtube:before {
        content: "\f34f";
    }
    .ion-md-add:before {
        content: "\f273";
    }
    .ion-md-add-circle:before {
        content: "\f272";
    }
    .ion-md-add-circle-outline:before {
        content: "\f158";
    }
    .ion-md-airplane:before {
        content: "\f15a";
    }
    .ion-md-alarm:before {
        content: "\f274";
    }
    .ion-md-albums:before {
        content: "\f275";
    }
    .ion-md-alert:before {
        content: "\f276";
    }
    .ion-md-american-football:before {
        content: "\f277";
    }
    .ion-md-analytics:before {
        content: "\f278";
    }
    .ion-md-aperture:before {
        content: "\f279";
    }
    .ion-md-apps:before {
        content: "\f27a";
    }
    .ion-md-appstore:before {
        content: "\f27b";
    }
    .ion-md-archive:before {
        content: "\f27c";
    }
    .ion-md-arrow-back:before {
        content: "\f27d";
    }
    .ion-md-arrow-down:before {
        content: "\f27e";
    }
    .ion-md-arrow-dropdown:before {
        content: "\f280";
    }
    .ion-md-arrow-dropdown-circle:before {
        content: "\f27f";
    }
    .ion-md-arrow-dropleft:before {
        content: "\f282";
    }
    .ion-md-arrow-dropleft-circle:before {
        content: "\f281";
    }
    .ion-md-arrow-dropright:before {
        content: "\f284";
    }
    .ion-md-arrow-dropright-circle:before {
        content: "\f283";
    }
    .ion-md-arrow-dropup:before {
        content: "\f286";
    }
    .ion-md-arrow-dropup-circle:before {
        content: "\f285";
    }
    .ion-md-arrow-forward:before {
        content: "\f287";
    }
    .ion-md-arrow-round-back:before {
        content: "\f288";
    }
    .ion-md-arrow-round-down:before {
        content: "\f289";
    }
    .ion-md-arrow-round-forward:before {
        content: "\f28a";
    }
    .ion-md-arrow-round-up:before {
        content: "\f28b";
    }
    .ion-md-arrow-up:before {
        content: "\f28c";
    }
    .ion-md-at:before {
        content: "\f28d";
    }
    .ion-md-attach:before {
        content: "\f28e";
    }
    .ion-md-backspace:before {
        content: "\f28f";
    }
    .ion-md-barcode:before {
        content: "\f290";
    }
    .ion-md-baseball:before {
        content: "\f291";
    }
    .ion-md-basket:before {
        content: "\f292";
    }
    .ion-md-basketball:before {
        content: "\f293";
    }
    .ion-md-battery-charging:before {
        content: "\f294";
    }
    .ion-md-battery-dead:before {
        content: "\f295";
    }
    .ion-md-battery-full:before {
        content: "\f296";
    }
    .ion-md-beaker:before {
        content: "\f297";
    }
    .ion-md-bed:before {
        content: "\f160";
    }
    .ion-md-beer:before {
        content: "\f298";
    }
    .ion-md-bicycle:before {
        content: "\f299";
    }
    .ion-md-bluetooth:before {
        content: "\f29a";
    }
    .ion-md-boat:before {
        content: "\f29b";
    }
    .ion-md-body:before {
        content: "\f29c";
    }
    .ion-md-bonfire:before {
        content: "\f29d";
    }
    .ion-md-book:before {
        content: "\f29e";
    }
    .ion-md-bookmark:before {
        content: "\f29f";
    }
    .ion-md-bookmarks:before {
        content: "\f2a0";
    }
    .ion-md-bowtie:before {
        content: "\f2a1";
    }
    .ion-md-briefcase:before {
        content: "\f2a2";
    }
    .ion-md-browsers:before {
        content: "\f2a3";
    }
    .ion-md-brush:before {
        content: "\f2a4";
    }
    .ion-md-bug:before {
        content: "\f2a5";
    }
    .ion-md-build:before {
        content: "\f2a6";
    }
    .ion-md-bulb:before {
        content: "\f2a7";
    }
    .ion-md-bus:before {
        content: "\f2a8";
    }
    .ion-md-business:before {
        content: "\f1a4";
    }
    .ion-md-cafe:before {
        content: "\f2a9";
    }
    .ion-md-calculator:before {
        content: "\f2aa";
    }
    .ion-md-calendar:before {
        content: "\f2ab";
    }
    .ion-md-call:before {
        content: "\f2ac";
    }
    .ion-md-camera:before {
        content: "\f2ad";
    }
    .ion-md-car:before {
        content: "\f2b2";
    }
    .ion-md-card:before {
        content: "\f2b3";
    }
    .ion-md-cart:before {
        content: "\f2b4";
    }
    .ion-md-cash:before {
        content: "\f2b5";
    }
    .ion-md-cellular:before {
        content: "\f164";
    }
    .ion-md-chatboxes:before {
        content: "\f2b6";
    }
    .ion-md-chatbubbles:before {
        content: "\f2b7";
    }
    .ion-md-checkbox:before {
        content: "\f2b9";
    }
    .ion-md-checkbox-outline:before {
        content: "\f2b8";
    }
    .ion-md-checkmark:before {
        content: "\f2bc";
    }
    .ion-md-checkmark-circle:before {
        content: "\f2bb";
    }
    .ion-md-checkmark-circle-outline:before {
        content: "\f2ba";
    }
    .ion-md-clipboard:before {
        content: "\f2bd";
    }
    .ion-md-clock:before {
        content: "\f2be";
    }
    .ion-md-close:before {
        content: "\f2c0";
    }
    .ion-md-close-circle:before {
        content: "\f2bf";
    }
    .ion-md-close-circle-outline:before {
        content: "\f166";
    }
    .ion-md-cloud:before {
        content: "\f2c9";
    }
    .ion-md-cloud-circle:before {
        content: "\f2c2";
    }
    .ion-md-cloud-done:before {
        content: "\f2c3";
    }
    .ion-md-cloud-download:before {
        content: "\f2c6";
    }
    .ion-md-cloud-outline:before {
        content: "\f2c7";
    }
    .ion-md-cloud-upload:before {
        content: "\f2c8";
    }
    .ion-md-cloudy:before {
        content: "\f2cb";
    }
    .ion-md-cloudy-night:before {
        content: "\f2ca";
    }
    .ion-md-code:before {
        content: "\f2ce";
    }
    .ion-md-code-download:before {
        content: "\f2cc";
    }
    .ion-md-code-working:before {
        content: "\f2cd";
    }
    .ion-md-cog:before {
        content: "\f2cf";
    }
    .ion-md-color-fill:before {
        content: "\f2d0";
    }
    .ion-md-color-filter:before {
        content: "\f2d1";
    }
    .ion-md-color-palette:before {
        content: "\f2d2";
    }
    .ion-md-color-wand:before {
        content: "\f2d3";
    }
    .ion-md-compass:before {
        content: "\f2d4";
    }
    .ion-md-construct:before {
        content: "\f2d5";
    }
    .ion-md-contact:before {
        content: "\f2d6";
    }
    .ion-md-contacts:before {
        content: "\f2d7";
    }
    .ion-md-contract:before {
        content: "\f2d8";
    }
    .ion-md-contrast:before {
        content: "\f2d9";
    }
    .ion-md-copy:before {
        content: "\f2da";
    }
    .ion-md-create:before {
        content: "\f2db";
    }
    .ion-md-crop:before {
        content: "\f2dc";
    }
    .ion-md-cube:before {
        content: "\f2dd";
    }
    .ion-md-cut:before {
        content: "\f2de";
    }
    .ion-md-desktop:before {
        content: "\f2df";
    }
    .ion-md-disc:before {
        content: "\f2e0";
    }
    .ion-md-document:before {
        content: "\f2e1";
    }
    .ion-md-done-all:before {
        content: "\f2e2";
    }
    .ion-md-download:before {
        content: "\f2e3";
    }
    .ion-md-easel:before {
        content: "\f2e4";
    }
    .ion-md-egg:before {
        content: "\f2e5";
    }
    .ion-md-exit:before {
        content: "\f2e6";
    }
    .ion-md-expand:before {
        content: "\f2e7";
    }
    .ion-md-eye:before {
        content: "\f2e9";
    }
    .ion-md-eye-off:before {
        content: "\f2e8";
    }
    .ion-md-fastforward:before {
        content: "\f2ea";
    }
    .ion-md-female:before {
        content: "\f2eb";
    }
    .ion-md-filing:before {
        content: "\f2ec";
    }
    .ion-md-film:before {
        content: "\f2ed";
    }
    .ion-md-finger-print:before {
        content: "\f2ee";
    }
    .ion-md-fitness:before {
        content: "\f1ac";
    }
    .ion-md-flag:before {
        content: "\f2ef";
    }
    .ion-md-flame:before {
        content: "\f2f0";
    }
    .ion-md-flash:before {
        content: "\f2f1";
    }
    .ion-md-flash-off:before {
        content: "\f169";
    }
    .ion-md-flashlight:before {
        content: "\f16b";
    }
    .ion-md-flask:before {
        content: "\f2f2";
    }
    .ion-md-flower:before {
        content: "\f2f3";
    }
    .ion-md-folder:before {
        content: "\f2f5";
    }
    .ion-md-folder-open:before {
        content: "\f2f4";
    }
    .ion-md-football:before {
        content: "\f2f6";
    }
    .ion-md-funnel:before {
        content: "\f2f7";
    }
    .ion-md-gift:before {
        content: "\f199";
    }
    .ion-md-git-branch:before {
        content: "\f2fa";
    }
    .ion-md-git-commit:before {
        content: "\f2fb";
    }
    .ion-md-git-compare:before {
        content: "\f2fc";
    }
    .ion-md-git-merge:before {
        content: "\f2fd";
    }
    .ion-md-git-network:before {
        content: "\f2fe";
    }
    .ion-md-git-pull-request:before {
        content: "\f2ff";
    }
    .ion-md-glasses:before {
        content: "\f300";
    }
    .ion-md-globe:before {
        content: "\f301";
    }
    .ion-md-grid:before {
        content: "\f302";
    }
    .ion-md-hammer:before {
        content: "\f303";
    }
    .ion-md-hand:before {
        content: "\f304";
    }
    .ion-md-happy:before {
        content: "\f305";
    }
    .ion-md-headset:before {
        content: "\f306";
    }
    .ion-md-heart:before {
        content: "\f308";
    }
    .ion-md-heart-dislike:before {
        content: "\f167";
    }
    .ion-md-heart-empty:before {
        content: "\f1a1";
    }
    .ion-md-heart-half:before {
        content: "\f1a2";
    }
    .ion-md-help:before {
        content: "\f30b";
    }
    .ion-md-help-buoy:before {
        content: "\f309";
    }
    .ion-md-help-circle:before {
        content: "\f30a";
    }
    .ion-md-help-circle-outline:before {
        content: "\f16d";
    }
    .ion-md-home:before {
        content: "\f30c";
    }
    .ion-md-hourglass:before {
        content: "\f111";
    }
    .ion-md-ice-cream:before {
        content: "\f30d";
    }
    .ion-md-image:before {
        content: "\f30e";
    }
    .ion-md-images:before {
        content: "\f30f";
    }
    .ion-md-infinite:before {
        content: "\f310";
    }
    .ion-md-information:before {
        content: "\f312";
    }
    .ion-md-information-circle:before {
        content: "\f311";
    }
    .ion-md-information-circle-outline:before {
        content: "\f16f";
    }
    .ion-md-jet:before {
        content: "\f315";
    }
    .ion-md-journal:before {
        content: "\f18d";
    }
    .ion-md-key:before {
        content: "\f316";
    }
    .ion-md-keypad:before {
        content: "\f317";
    }
    .ion-md-laptop:before {
        content: "\f318";
    }
    .ion-md-leaf:before {
        content: "\f319";
    }
    .ion-md-link:before {
        content: "\f22e";
    }
    .ion-md-list:before {
        content: "\f31b";
    }
    .ion-md-list-box:before {
        content: "\f31a";
    }
    .ion-md-locate:before {
        content: "\f31c";
    }
    .ion-md-lock:before {
        content: "\f31d";
    }
    .ion-md-log-in:before {
        content: "\f31e";
    }
    .ion-md-log-out:before {
        content: "\f31f";
    }
    .ion-md-magnet:before {
        content: "\f320";
    }
    .ion-md-mail:before {
        content: "\f322";
    }
    .ion-md-mail-open:before {
        content: "\f321";
    }
    .ion-md-mail-unread:before {
        content: "\f172";
    }
    .ion-md-male:before {
        content: "\f323";
    }
    .ion-md-man:before {
        content: "\f324";
    }
    .ion-md-map:before {
        content: "\f325";
    }
    .ion-md-medal:before {
        content: "\f326";
    }
    .ion-md-medical:before {
        content: "\f327";
    }
    .ion-md-medkit:before {
        content: "\f328";
    }
    .ion-md-megaphone:before {
        content: "\f329";
    }
    .ion-md-menu:before {
        content: "\f32a";
    }
    .ion-md-mic:before {
        content: "\f32c";
    }
    .ion-md-mic-off:before {
        content: "\f32b";
    }
    .ion-md-microphone:before {
        content: "\f32d";
    }
    .ion-md-moon:before {
        content: "\f32e";
    }
    .ion-md-more:before {
        content: "\f1c9";
    }
    .ion-md-move:before {
        content: "\f331";
    }
    .ion-md-musical-note:before {
        content: "\f332";
    }
    .ion-md-musical-notes:before {
        content: "\f333";
    }
    .ion-md-navigate:before {
        content: "\f334";
    }
    .ion-md-notifications:before {
        content: "\f338";
    }
    .ion-md-notifications-off:before {
        content: "\f336";
    }
    .ion-md-notifications-outline:before {
        content: "\f337";
    }
    .ion-md-nuclear:before {
        content: "\f339";
    }
    .ion-md-nutrition:before {
        content: "\f33a";
    }
    .ion-md-open:before {
        content: "\f33b";
    }
    .ion-md-options:before {
        content: "\f33c";
    }
    .ion-md-outlet:before {
        content: "\f33d";
    }
    .ion-md-paper:before {
        content: "\f33f";
    }
    .ion-md-paper-plane:before {
        content: "\f33e";
    }
    .ion-md-partly-sunny:before {
        content: "\f340";
    }
    .ion-md-pause:before {
        content: "\f341";
    }
    .ion-md-paw:before {
        content: "\f342";
    }
    .ion-md-people:before {
        content: "\f343";
    }
    .ion-md-person:before {
        content: "\f345";
    }
    .ion-md-person-add:before {
        content: "\f344";
    }
    .ion-md-phone-landscape:before {
        content: "\f346";
    }
    .ion-md-phone-portrait:before {
        content: "\f347";
    }
    .ion-md-photos:before {
        content: "\f348";
    }
    .ion-md-pie:before {
        content: "\f349";
    }
    .ion-md-pin:before {
        content: "\f34a";
    }
    .ion-md-pint:before {
        content: "\f34b";
    }
    .ion-md-pizza:before {
        content: "\f354";
    }
    .ion-md-planet:before {
        content: "\f356";
    }
    .ion-md-play:before {
        content: "\f357";
    }
    .ion-md-play-circle:before {
        content: "\f174";
    }
    .ion-md-podium:before {
        content: "\f358";
    }
    .ion-md-power:before {
        content: "\f359";
    }
    .ion-md-pricetag:before {
        content: "\f35a";
    }
    .ion-md-pricetags:before {
        content: "\f35b";
    }
    .ion-md-print:before {
        content: "\f35c";
    }
    .ion-md-pulse:before {
        content: "\f35d";
    }
    .ion-md-qr-scanner:before {
        content: "\f35e";
    }
    .ion-md-quote:before {
        content: "\f35f";
    }
    .ion-md-radio:before {
        content: "\f362";
    }
    .ion-md-radio-button-off:before {
        content: "\f360";
    }
    .ion-md-radio-button-on:before {
        content: "\f361";
    }
    .ion-md-rainy:before {
        content: "\f363";
    }
    .ion-md-recording:before {
        content: "\f364";
    }
    .ion-md-redo:before {
        content: "\f365";
    }
    .ion-md-refresh:before {
        content: "\f366";
    }
    .ion-md-refresh-circle:before {
        content: "\f228";
    }
    .ion-md-remove:before {
        content: "\f368";
    }
    .ion-md-remove-circle:before {
        content: "\f367";
    }
    .ion-md-remove-circle-outline:before {
        content: "\f176";
    }
    .ion-md-reorder:before {
        content: "\f369";
    }
    .ion-md-repeat:before {
        content: "\f36a";
    }
    .ion-md-resize:before {
        content: "\f36b";
    }
    .ion-md-restaurant:before {
        content: "\f36c";
    }
    .ion-md-return-left:before {
        content: "\f36d";
    }
    .ion-md-return-right:before {
        content: "\f36e";
    }
    .ion-md-reverse-camera:before {
        content: "\f36f";
    }
    .ion-md-rewind:before {
        content: "\f370";
    }
    .ion-md-ribbon:before {
        content: "\f371";
    }
    .ion-md-rocket:before {
        content: "\f179";
    }
    .ion-md-rose:before {
        content: "\f372";
    }
    .ion-md-sad:before {
        content: "\f373";
    }
    .ion-md-save:before {
        content: "\f1a9";
    }
    .ion-md-school:before {
        content: "\f374";
    }
    .ion-md-search:before {
        content: "\f375";
    }
    .ion-md-send:before {
        content: "\f376";
    }
    .ion-md-settings:before {
        content: "\f377";
    }
    .ion-md-share:before {
        content: "\f379";
    }
    .ion-md-share-alt:before {
        content: "\f378";
    }
    .ion-md-shirt:before {
        content: "\f37a";
    }
    .ion-md-shuffle:before {
        content: "\f37b";
    }
    .ion-md-skip-backward:before {
        content: "\f37c";
    }
    .ion-md-skip-forward:before {
        content: "\f37d";
    }
    .ion-md-snow:before {
        content: "\f37e";
    }
    .ion-md-speedometer:before {
        content: "\f37f";
    }
    .ion-md-square:before {
        content: "\f381";
    }
    .ion-md-square-outline:before {
        content: "\f380";
    }
    .ion-md-star:before {
        content: "\f384";
    }
    .ion-md-star-half:before {
        content: "\f382";
    }
    .ion-md-star-outline:before {
        content: "\f383";
    }
    .ion-md-stats:before {
        content: "\f385";
    }
    .ion-md-stopwatch:before {
        content: "\f386";
    }
    .ion-md-subway:before {
        content: "\f387";
    }
    .ion-md-sunny:before {
        content: "\f388";
    }
    .ion-md-swap:before {
        content: "\f389";
    }
    .ion-md-switch:before {
        content: "\f38a";
    }
    .ion-md-sync:before {
        content: "\f38b";
    }
    .ion-md-tablet-landscape:before {
        content: "\f38c";
    }
    .ion-md-tablet-portrait:before {
        content: "\f38d";
    }
    .ion-md-tennisball:before {
        content: "\f38e";
    }
    .ion-md-text:before {
        content: "\f38f";
    }
    .ion-md-thermometer:before {
        content: "\f390";
    }
    .ion-md-thumbs-down:before {
        content: "\f391";
    }
    .ion-md-thumbs-up:before {
        content: "\f392";
    }
    .ion-md-thunderstorm:before {
        content: "\f393";
    }
    .ion-md-time:before {
        content: "\f394";
    }
    .ion-md-timer:before {
        content: "\f395";
    }
    .ion-md-today:before {
        content: "\f17d";
    }
    .ion-md-train:before {
        content: "\f396";
    }
    .ion-md-transgender:before {
        content: "\f397";
    }
    .ion-md-trash:before {
        content: "\f398";
    }
    .ion-md-trending-down:before {
        content: "\f399";
    }
    .ion-md-trending-up:before {
        content: "\f39a";
    }
    .ion-md-trophy:before {
        content: "\f39b";
    }
    .ion-md-tv:before {
        content: "\f17f";
    }
    .ion-md-umbrella:before {
        content: "\f39c";
    }
    .ion-md-undo:before {
        content: "\f39d";
    }
    .ion-md-unlock:before {
        content: "\f39e";
    }
    .ion-md-videocam:before {
        content: "\f39f";
    }
    .ion-md-volume-high:before {
        content: "\f123";
    }
    .ion-md-volume-low:before {
        content: "\f131";
    }
    .ion-md-volume-mute:before {
        content: "\f3a1";
    }
    .ion-md-volume-off:before {
        content: "\f3a2";
    }
    .ion-md-walk:before {
        content: "\f3a4";
    }
    .ion-md-wallet:before {
        content: "\f18f";
    }
    .ion-md-warning:before {
        content: "\f3a5";
    }
    .ion-md-watch:before {
        content: "\f3a6";
    }
    .ion-md-water:before {
        content: "\f3a7";
    }
    .ion-md-wifi:before {
        content: "\f3a8";
    }
    .ion-md-wine:before {
        content: "\f3a9";
    }
    .ion-md-woman:before {
        content: "\f3aa";
    }
`;
